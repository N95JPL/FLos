const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");
const { VINDecode } = require("../XML/VINDecode");

var arrBuilder = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-",]
//var arrBuilder = []
var CCF = ""
var CCFString = ""
var VIN = ""
var model_id = ""
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
            VIN = CCFString.substring(3, 20);
            console.log("This vehicles VIN: " + VIN);
            decodeModel(VIN);
            setup = true;
        }
    }
}

function decodeModel(VIN) {
    var test = []
    var charpos = "1,3"
    var opt = ""
    var charval = ""
    var val_test = ""
    var is_model = false
    for (var i = 0; i < VINDecode["Models"].length; i++) {
        if (is_model) {
            model_id = VINDecode.Models[i].DecodeModel
            console.log("This vehicle's model ID is: " + model_id)
            i = VINDecode["Models"].length + 1
            break
        }
        console.log("Running Model: " + i)
        console.log("Number of Tests to run: " + VINDecode["Models"][i]["Test"].length)
        for (var x = 0; x < VINDecode["Models"][i]["Test"].length; x++) {
            console.log("Running test: " + x)
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
                console.log("Test Failed - Answer made: " + val_test + "... Answer Expected: " + charval)
                break
            } else {
                console.log("Test Passed - Answer made: " + val_test + "... Answer Expected: " + charval)
            }
        }
        model_id = VINDecode.Models[i].DecodeModel
    }
    console.log("Model ID: " + model_id)
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