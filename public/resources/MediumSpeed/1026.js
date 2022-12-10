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
var eucdData = { "EUCD": [{}] };
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
      // console.log("EUCD" + (arr[0] - 1) + ": " + arrBuilder[arr[0] - 1]);
    } else {
      // setup = true;
      console.log("EUCD: " + arrBuilder);
      if (!vehicleInfo.eucdDecode && vehicleInfo.vinDecode) {
        var configFile;
        var textDecodeFile;
        var eucd = arrBuilder.join(",");
        eucd = eucd.replaceAll(",", "");
        // console.log(eucd);
        if (isDev) {
          configFile =
            "/home/n95jpl/Documents/GitHub/JagOS/extraResources/JSON/CCF/CCF_DATA_" +
            vehicleInfo.CCFID +
            ".json";
          textDecodeFile =
            "/home/n95jpl/Documents/GitHub/JagOS/extraResources/JSON/DecodeCCFText.json";
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
            blockID = w;
            break;
          }
        }
        for (
          var x = 0;
          x < data.configuration_data.block[blockID].group.length;
          x++
        ) {
          var id = data.configuration_data.block[blockID].group[x].title.tm.id;
          var startByte =
            parseInt(data.configuration_data.block[blockID].group[x].start) * 2;
          var stopByte =
            (parseInt(data.configuration_data.block[blockID].group[x].stop) +
              1) *
            2;
          var testValue = "0x" + eucd.slice(startByte, stopByte);
          testValue = testValue.replace(",");
          if (
            data.configuration_data.block[blockID].group[x].parameter.select
          ) {
            for (
              var y = 0;
              y <
              data.configuration_data.block[blockID].group[x].parameter.select
                .option.length;
              y++
            ) {
              // console.log("Got to options!");
              // console.log(
              //   data.configuration_data.block[blockID].group[x].parameter.select
              //     .option[y]
              // );
              if (
                data.configuration_data.block[blockID].group[x].parameter.select
                  .option[y].value == testValue
              ) {
                if (data.configuration_data.block[blockID].group[x].parameter.select
                  .option[y].tm.id != "@UndefinedApp" && data.configuration_data.block[blockID].group[x].parameter.select
                    .option[y].tm.id != undefined) {
                  var option =
                    data.configuration_data.block[blockID].group[x].parameter
                      .select.option[y].tm.id;
                  eucdData.EUCD[eucdData.EUCD.length] = { "option": id, "optionID": option }
                  // console.log("We matched: " + eucdData[id].optionID);
                }
                break;
              }
            }
          }
        }
        setup = true;
        console.log("We should have data here!");
        // console.log(eucdData);
        var textData = fs.readFileSync(textDecodeFile);
        textData = JSON.parse(textData);
        console.log(eucdData);
        console.log(eucdData.EUCD.length);
        for (var z = 0; z < eucdData.EUCD.length; z++) {
          if (z != 0) {
            var idTest = eucdData.EUCD[z].optionID
            idTest = idTest.substring(0, 2)
            var optionidTest = eucdData.EUCD[z].option
            optionidTest = optionidTest.substring(0, 2)
            console.log(eucdData.EUCD[z].optionID)
            console.log(textData[idTest][eucdData.EUCD[z].optionID]["eng"])
            eucdData.EUCD[z]["optionText"] = textData[idTest][eucdData.EUCD[z].optionID]["eng"];
            eucdData.EUCD[z]["optionIDText"] = textData[optionidTest][eucdData.EUCD[z].option]["eng"];
          }
        }
        vehicleInfo.eucdDecode = true;
        console.log(eucdData);
      }
    }
  }
}
module.exports = ms1026;
