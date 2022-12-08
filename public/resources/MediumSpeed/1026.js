const fs = require("fs");
const path = require("path");
const isDev = require("electron-is-dev");
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
var eucdData = [];
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
        var configFile;
        var textDecodeFile;
        if (isDev) {
          configFile =
            "../../../extraResources/JSON/CCF/CCF_DATA_" +
            vehicleInfo.CCFID +
            ".json";
          textDecodeFile = "../../extraResources/JSON/DecodeCCFText.json";
        } else {
          configFile = path.join(
            path.dirname(process.resourcesPath),
            "resources/JSON/CCF",
            "CCF_DATA_" + vehicleInfo.CCFID + ".json"
          );
          textDecodeFile = path.join(
            path.dirname(process.resourcesPath),
            "resources/JSON",
            "DecodeCCFText.json"
          );
        }
        var data = fs.readFileSync(configFile);
        var blockID;
        data = JSON.parse(data);
        for (var w = 0; w < data.configuration_data.block.length; w++) {
          if (data.configuration_data.block[w].name.includes("EUCD")) {
            blockID = w
            break
          }
        }
        for (var x = 0; x <  data.configuration_data.block[blockID].group.length; x++) {
          var id = data.configuration_data.block[blockID].group[x].title.tm.id;
          if (!eucdData[id]){
            eucdData[id] = {}
          }
          var startByte = data.configuration_data.block[blockID].group[x].start - 1
          var endByte = data.configuration_data.block[blockID].group[x].stop
          var testValue = arrBuilder.slice(start, stop).replace(",")
          console.log(testValue)
          for (var y = 0; y < data.configuration_data.block[blockID].group[x].parameter.select.option.length; y++){
            if (data.configuration_data.block[blockID].group[x].parameter.select.option[y].value.replace("0x") == testValue){
              var option = data.configuration_data.block[blockID].group[x].parameter.select.option[y].tm.id
              eucdData[id]["optionID"] = option
              console.log(eucdData[id][optionID])
            }
          }
        }
      }
    }
  }
}
module.exports = ms1026;
