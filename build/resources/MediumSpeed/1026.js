const fs = require("fs");
const path = require('path')
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");
const { VINDecode } = require("../JSON/VINDecode");
const { Vehicle_Manifest } = require("../JSON/Vehicle_Manifest");
const { vehicleInfo } = require("../VariableMaps/VehicleInfoVar");

var arrBuilder = [
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
  "-",
];
//var Builder = []
var eucdData = []
var setup = false;

function ms1026(msg, window) {
  if (!setup) {
    if (arrBuilder.includes("-")) {
      vehicleInfo.setupEUCDStep = vehicleInfo.setupEUCDStep + 1;
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
      console.log("EUCD" + (arr[0] - 1) + ": " + arrBuilder[arr[0] - 1]);
    } else {
      // setup = true;
      console.log("EUCD: " + arrBuilder);
      if (!vehicleInfo.eucdDecode && vehicleInfo.vinDecode) {
        const configFile = path.join(path.dirname(process.resourcesPath), 'resources/JSON/CCF', "CCF_DATA_" + vehicleInfo.CCFID + ".json");
        var data = fs.readFileSync(configFile);
        data = JSON.parse(data);
        for (var x = 0; x < arrBuilder.length; x++) {
          var id = data.configuration_data.block[1].group[x].title.tm.id
          console.log(id)
        }
      }
    }
  }
}
module.exports = ms1026;
