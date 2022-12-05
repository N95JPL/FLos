const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");
const { VINDecode } = require("../XML/VINDecode");
const { Vehicle_Manifest } = require("../XML/Vehicle_Manifest");
const { vehicleInfo } = require("../VariableMaps/VehicleInfoVar");

var arrBuilder = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-",]
//var Builder = []
var CCF = ""
var CCFString = ""
var is_model = false
var manifest_id = ""

var setup = false

function ms1026(msg, window) {
    if (!setup) {
        if (arrBuilder.includes("-")) {
            vehicleInfo.setupEUCDStep = vehicleInfo.setupEUCDStep + 1
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
            console.log("EUCD" + (arr[0] - 1) + ": " + (arrBuilder[(arr[0] - 1)]));
        } else {
            setup = true
            console.log("EUCD: " + arrBuilder);
            if (!vehicleInfo.eucdDecode && vehicleInfo.vinDecode) {

            }
        }
    }
}
module.exports = ms1026;