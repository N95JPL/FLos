const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");
const { VINDecode } = require("../XML/VINDecode");
const { vehicleInfo } = require("../VariableMaps/VehicleInfoVar");

var arrBuilder = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-",]
//var Builder = []
var CCF = ""
var CCFString = ""
var is_model = false
var manifest_id = ""

var setup = false
//Important stuff that will need broadcasting
// vehicleInfo.VIN = "-"
// vehicleInfo.Model_id = "-"
// vehicleInfo.brand = "-"
// vehicleInfo.model = "-"
// vehicleInfo.modelName = "-"
// vehicleInfo.market = "-"
// vehicleInfo.bodyStyle = "-"
// vehicleInfo.trim = "-"
// vehicleInfo.emission = "-"
// vehicleInfo.modelYear = "-"
// vehicleInfo.plant = "-"
// vehicleInfo.driver = "-"
// vehicleInfo.transmission = "-"
// vehicleInfo.engine = "-"


function ms1025(msg, window) {
    if (!setup) {
        if (arrBuilder.includes("-")) {
            vehicleInfo.setupStep = vehicleInfo.setupStep + 1
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
            // console.log((arr[0] - 1) + ": " + (arrBuilder[(arr[0] - 1)]));
        } else {
            if (vehicleInfo.firstTimeSetup && !vehicleInfo.vinDecode) {
                console.log("All CCF data received");
                CCF = arrBuilder.join("")
                CCF = CCF.replaceAll(",", "");
                CCFString = hex2a(CCF);
                vehicleInfo.VIN = CCFString.substring(3, 20);
                console.log("This vehicles VIN: " + vehicleInfo.VIN);
                if (vehicleInfo.VIN.length == 17) {
                    decodeModelID(vehicleInfo.VIN);
                    if (is_model) {
                        decodeModel(vehicleInfo.VIN);
                        console.log("It would appear that all the vehicle info has been decoded!")
                        console.log("VIN: " + vehicleInfo.VIN)
                        console.log("Model ID: " + vehicleInfo.Model_id)
                        console.log("Brand: " + vehicleInfo.Brand)
                        console.log("Model: " + vehicleInfo.Model)
                        console.log("Model Name: " + vehicleInfo.ModelName)
                        console.log("Market: " + vehicleInfo.Market)
                        console.log("Body Style: " + vehicleInfo.BodyStyle)
                        console.log("Trim: " + vehicleInfo.Trim)
                        console.log("Emission: " + vehicleInfo.Emission)
                        console.log("Model Year: " + vehicleInfo.ModelYear)
                        console.log("Plant: " + vehicleInfo.Plant)
                        console.log("Driver: " + vehicleInfo.Driver)
                        console.log("Transmission: " + vehicleInfo.Transmission)
                        console.log("Engine: " + vehicleInfo.Engine)
                        setup = true
                        vehicleInfo.vinDecode = true
                    }
                }
                if (!setup) {
                    console.log("Parsing vehicle data has failed - See parsed data below")
                    console.log("VIN: " + vehicleInfo.VIN)
                    console.log("Model ID: " + vehicleInfo.Model_id)
                    console.log("Brand: " + vehicleInfo.Brand)
                    console.log("Model: " + vehicleInfo.Model)
                    console.log("Model Name: " + vehicleInfo.ModelName)
                    console.log("Market: " + vehicleInfo.Market)
                    console.log("Body Style: " + vehicleInfo.BodyStyle)
                    console.log("Trim: " + vehicleInfo.Trim)
                    console.log("Emission: " + vehicleInfo.Emission)
                    console.log("Model Year: " + vehicleInfo.ModelYear)
                    console.log("Plant: " + vehicleInfo.Plant)
                    console.log("Driver: " + vehicleInfo.Driver)
                    console.log("Transmission: " + vehicleInfo.Transmission)
                    console.log("Engine: " + vehicleInfo.Engine)
                    arrBuilder = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-",]
                    CCF = ""
                    CCFString = ""
                    vehicleInfo.firstTimeSetup = true
                    vehicleInfo.VIN = "-"
                    vehicleInfo.Model_id = "-"
                    vehicleInfo.Brand = "-"
                    vehicleInfo.Model = "-"
                    vehicleInfo.ModelName = "-"
                    vehicleInfo.Market = "-"
                    vehicleInfo.BodyStyle = "-"
                    vehicleInfo.Trim = "-"
                    vehicleInfo.Emission = "-"
                    vehicleInfo.ModelYear = "-"
                    vehicleInfo.Plant = "-"
                    vehicleInfo.Driver = "-"
                    vehicleInfo.Transmission = "-"
                    vehicleInfo.Engine = "-"
                }
            } else if (!vehicleInfo.firstTimeSetup && !vehicleInfo.vinDecode) {
                console.log("All CCF data received");
                CCF = arrBuilder.join("")
                CCF = CCF.replaceAll(",", "");
                CCFString = hex2a(CCF);
                let VIN = CCFString.substring(3, 20);
                if (VIN == vehicleInfo.VIN) {
                    vehicleInfo.vinDecode = true
                    setup = true
                    console.log("This is the same vehicle as before")
                    console.log("This vehicles VIN: " + vehicleInfo.VIN);
                } else {
                    vehicleInfo.firstTimeSetup = true
                    vehicleInfo.vinDecode = false
                    vehicleInfo.eucdDecode = false
                    vehicleInfo.VIN = VIN
                    vehicleInfo.Model_id = "-"
                    vehicleInfo.Brand = "-"
                    vehicleInfo.Model = "-"
                    vehicleInfo.ModelName = "-"
                    vehicleInfo.Market = "-"
                    vehicleInfo.BodyStyle = "-"
                    vehicleInfo.Trim = "-"
                    vehicleInfo.Emission = "-"
                    vehicleInfo.ModelYear = "-"
                    vehicleInfo.Plant = "-"
                    vehicleInfo.Driver = "-"
                    vehicleInfo.Transmission = "-"
                    vehicleInfo.Engine = "-"
                }
            } else if (vehicleInfo.firstTimeSetup && vehicleInfo.vinDecode && vehicleInfo.eucdDecode) {
                // window.webContents.send("fadeOut", "now");
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
        // console.log("Running Model: " + i)
        // console.log("Number of Tests to run: " + VINDecode["Models"][i]["Test"].length)
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
            vehicleInfo.Model_id = VINDecode.Models[i].DecodeModel
            break
        }
    }
    if (!is_model) {
        console.error("All tests have failed!\nIs this a JLR Vehicle?\nVIN: " + vehicleInfo.VIN)

    }
}

function decodeModel(VIN) {
    var charpos = "1,3"
    var opt = ""
    var charval = ""
    var val_test = ""
    var name = ""
    for (var i = 0; i < VINDecode.Decodes[(vehicleInfo.Model_id - 1)].Attribute.length; i++) {
        if (!VINDecode.Decodes[(vehicleInfo.Model_id - 1)].Attribute[i].Char) {
            name = VINDecode.Decodes[(vehicleInfo.Model_id - 1)].Attribute[i].Name
            vehicleInfo[name] = VINDecode.Decodes[(vehicleInfo.Model_id - 1)].Attribute[i].Decode
            console.log(name + ": " + VINDecode.Decodes[(vehicleInfo.Model_id - 1)].Attribute[i].Decode + " | " + vehicleInfo[name])
        } else {
            charpos = VINDecode.Decodes[(vehicleInfo.Model_id - 1)].Attribute[i].Char
            if (charpos.includes(",")) {
                val_test = VIN.substring(parseInt(charpos.charAt(0) - 1), parseInt(charpos.charAt(2)))
            } else {
                val_test = VIN.charAt(parseInt(charpos - 1))
            }
            name = VINDecode.Decodes[(vehicleInfo.Model_id - 1)].Attribute[i].Name
            for (var x = 0; x < VINDecode.Decodes[(vehicleInfo.Model_id - 1)].Attribute[i].Value.length; x++) {
                if (val_test == VINDecode.Decodes[(vehicleInfo.Model_id - 1)].Attribute[i].Value[x].Value) {
                    vehicleInfo[name] = VINDecode.Decodes[(vehicleInfo.Model_id - 1)].Attribute[i].Value[x].Decode
                    console.log(name + ": " + VINDecode.Decodes[(vehicleInfo.Model_id - 1)].Attribute[i].Decode + " | " + vehicleInfo[name])
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