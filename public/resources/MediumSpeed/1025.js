const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");
const { VINDecode } = require("../XML/VINDecode");
const { vehicleInfo } = require("../VariableMaps/VehicleInfoVar");
var arrBuilder = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-",]
//var Builder = []
var CCF = ""
var CCFString = ""
var is_model = false
var manifest_id = ""

//Important stuff that will need broadcasting
// vehicleInfo.data.VIN = "-"
// vehicleInfo.data.model_id = "-"
// vehicleInfo.data.brand = "-"
// vehicleInfo.data.model = "-"
// vehicleInfo.data.modelName = "-"
// vehicleInfo.data.market = "-"
// vehicleInfo.data.bodyStyle = "-"
// vehicleInfo.data.trim = "-"
// vehicleInfo.data.emission = "-"
// vehicleInfo.data.modelYear = "-"
// vehicleInfo.data.plant = "-"
// vehicleInfo.data.driver = "-"
// vehicleInfo.data.transmission = "-"
// vehicleInfo.data.engine = "-"

var setup = false

function ms1025(msg) {
    if (arrBuilder.includes("-")) {
        const strId = msg.id;
        const arr = [...msg.data];
        // console.log(msg.data);
        var arrData = [arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7]];
        for (var i = 0; i < arrData.length; i++) {
            arrData[i] = arrData[i].toString(16);
            if (arrData[i].length < 2) {
                arrData[i] = "0" + arrData[i];
            }
        }
        arrBuilder[parseInt(arr[0]) - 1] = arrData;
        console.log((arr[0] - 1) + ": " + (arrBuilder[(arr[0] - 1)]));
    } else {
        if (!setup) {
            console.log("All CCF data received");
            CCF = arrBuilder.join("")
            CCF = CCF.replaceAll(",", "");
            CCFString = hex2a(CCF);
            vehicleInfo.data.VIN = CCFString.substring(3, 20);
            console.log("This vehicles VIN: " + vehicleInfo.data.VIN);
            if (vehicleInfo.data.VIN.length == 17) {
                decodeModelID(vehicleInfo.data.VIN);
                if (is_model) {
                    decodeModel(vehicleInfo.data.VIN, vehicleInfo.data.model_id)
                }
            }
            if (!setup) {
                console.log("Parsing vehicle data has failed - See parsed data below")
                console.log("VIN: " + vehicleInfo.data.VIN)
                console.log("Model ID: " + vehicleInfo.data.model_id)
                console.log("Brand: " + vehicleInfo.data.brand)
                arrBuilder = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-",]
                CCF = ""
                CCFString = ""
                vehicleInfo.data.VIN = "-"
                vehicleInfo.data.model_id = "-"
                vehicleInfo.data.Brand = "-"
                vehicleInfo.data.Model = "-"
                vehicleInfo.data.ModelName = "-"
                vehicleInfo.data.Market = "-"
                vehicleInfo.data.BodyStyle = "-"
                vehicleInfo.data.Trim = "-"
                vehicleInfo.data.Emission = "-"
                vehicleInfo.data.ModelYear = "-"
                vehicleInfo.data.Plant = "-"
                vehicleInfo.data.Driver = "-"
                vehicleInfo.data.Transmission = "-"
                vehicleInfo.data.Engine = "-"
            }
        }
    }
}

function decodeModelID(VIN) {
    var charpos = "1,3"
    var opt = ""
    var charval = ""
    var val_test = ""
    is_model = false
    for (var i = 0; i < VINDecode["Models"].length; i++) {
        console.log("Running Model: " + i)
        console.log("Number of Tests to run: " + VINDecode["Models"][i]["Test"].length)
        for (var x = 0; x < VINDecode["Models"][i]["Test"].length; x++) {
            charpos = VINDecode.Models[i].Test[x].CharPos
            opt = VINDecode.Models[i].Test[x].Operator
            charval = VINDecode.Models[i].Test[x].CharValue
            if (charpos.includes(",")) {
                val_test = VIN.substring(parseInt(charpos.charAt(0) - 1), parseInt(charpos.charAt(2)))
            } else {
                val_test = VIN.charAt(parseInt(charpos - 1))
            }
            if (opt == "EQUAL") {
                if (val_test == charval) {
                    is_model = true
                } else {
                    is_model = false
                }
            } else if (opt == "NOT_EQUAL") {
                if (val_test != charval) {
                    is_model = true
                } else {
                    is_model = false
                }
            }
            if (is_model == false) {
                break
            } else {
            }
        }
        if (is_model) {
            vehicleInfo.data.model_id = VINDecode.Models[i].DecodeModel
            i = VINDecode["Models"].length + 1
            break
        }
    }
    if (!is_model) {
        console.error("All tests have failed!\nIs this a JLR Vehicle?\nVIN: " + vehicleInfo.data.VIN)

    }
}

function decodeModel(VIN, model_id) {
    var charpos = "1,3"
    var opt = ""
    var charval = ""
    var val_test = ""
    var name = ""
    for (var i = 0; i < VINDecode.Decodes[(vehicleInfo.data.model_id - 1)].Attribute.length; i++) {
        if (!VINDecode.Decodes[(vehicleInfo.data.model_id - 1)].Attribute[i].Char) {
            name = VINDecode.Decodes[(vehicleInfo.data.model_id - 1)].Attribute[i].Name
            vehicleInfo.data[name] = VINDecode.Decodes[(vehicleInfo.data.model_id - 1)].Attribute[i].Decode
        } else {
            charpos = VINDecode.Decodes[(vehicleInfo.data.model_id - 1)].Attribute[i].Char
            val_test = VIN.substring(parseInt(charpos.charAt(0) - 1), parseInt(charpos.charAt(2)))
            name = VINDecode.Decodes[(vehicleInfo.data.model_id - 1)].Attribute[i].Name
            for (var x = 0; x < VINDecode.Decodes[(vehicleInfo.data.model_id - 1)].Attribute[i].Value.length; x++) {
                if (val_test == VINDecode.Decodes[(vehicleInfo.data.model_id - 1)].Attribute[i].Value.Value) {
                    vehicleInfo.data[name] = VINDecode.Decodes[(vehicleInfo.data.model_id - 1)].Attribute[i].Value.Value
                    break
                }
            }
        }
    }
}

function hex2a(str1) {
    var hex = str1.toString();
    var str = '';
    for (var n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
}

module.exports = ms1025;