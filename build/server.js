const { exec } = require("child_process");
const { ipcMain } = require("electron");
const {
  mediumSpeed,
  mediumSpeedPrev,
} = require("./resources/VariableMaps/MediumSpeedVar");
const { Out } = require("./resources/CanMap/canOut");
const { SettingsOut } = require("./resources/CanMap/canSetting");
const {
  vehicleInfo,
  vehicleInfoPrev,
} = require("./resources/VariableMaps/VehicleInfoVar");
const can = require("socketcan");
const fs = require("fs");
let parseMediumSpeed = require("./resources/MediumSpeed");

let changedMedium = {
  time: {},
  temperature: {},
  indicators: {},
  brightness: {},
  vehicleSettings: {},
};
let changedVehicleInfo = {};
module.exports = function (window, dev) {
  let canDataMS;
  let canRecordingMS = false;
  let canDataMSval = 0;
  let canDataMSFile;
  let canDataHS;
  let canRecordingHS = false;
  let canDataHSval = 0;
  let canDataHSFile;

  let sendClimateMsg;

  // let canIds = Map;
  let outIds = Out;
  let seetingsIds = SettingsOut;
  // canIds = JSON.stringify(canIds);
  // outIds = JSON.stringify(outIds)
  // default array to use as the buffer to send can messages when no new changes
  const def = [203, 0, 0, 0, 0, 0, 127, 127];
  // const staticAmb = 255
  // const info = {}

  // message object which is used to send can message
  const msgOut = {
    id: 712,
    data: def,
  };
  // eslint-disable-next-line no-unused-vars
  // create can can0
  let can0;
  let can1;
  try {
    can0 = can.createRawChannel("can0", true);
    console.log("CAN0 Started");
    can1 = can.createRawChannel("can1", true);
    console.log("CAN1 Started");
  } catch {
    exec(
      "sudo modprobe vcan && sudo ip link add dev can0 type vcan && sudo ip link add dev can1 type vcan && sudo ip link set up can0 && sudo ip link set up can1 && sudo modprobe can-gw && sudo cangw -A -s can0 -d can1 -e && sudo cangw -A -s can1 -d can0 -e"
    );
    can0 = can.createRawChannel("can0", true);
    can1 = can.createRawChannel("can1", true);
  }
  ipcMain.on("vehicleInfo", (event, msg) => {
    console.log("Message about vehicle from UI");
    for (let key in msg) {
      if (msg[key] != "-") {
        vehicleInfo[key] = msg[key];
      }
    }
    console.log(vehicleInfo);
  });
  // sudo modprobe vcan && sudo ip link add dev can0 type vcan && sudo ip link add dev can1 type vcan && sudo ip link set up can0 && sudo ip link set up can1 && sudo modprobe can-gw && sudo cangw -A -s can0 -d can1 -e && sudo cangw -A -s can1 -d can0 -e
  can0.addListener("onMessage", function (msg) {
    if (canRecordingMS) {
      canDataMS +=
        Date.now() + ", ," + msg.id + "," + msg.data.toString("hex") + "\n";
      canDataMSval++;
    }

    if (canDataMSval === 400) {
      fs.appendFile(`canBusMS-${canDataMSFile}.csv`, canDataMS, function (err) {
        if (err) throw err;
      });
      canDataMS = "";
      canDataMSval = "";
    }
    parseMediumSpeed(msg, window);
  });
  can1.addListener("onMessage", function (msg) {
    if (canRecordingHS) {
      canDataHS +=
        Date.now() + ", ," + msg.id + "," + msg.data.toString("hex") + "\n";
      canDataHSval++;
    }
    if (canDataHSval === 400) {
      fs.appendFile(`canBusHS-${canDataHSFile}.csv`, canDataHS, function (err) {
        if (err) throw err;
      });
      canDataHS = "";
      canDataHSval = "";
    }
  });
  can0.start();
  can1.start();
  ipcMain.on("actionClimate", (event, msg) => {
    let value;
    let byte;
    value = outIds[msg.type].val;
    byte = outIds[msg.type].byte;
    if (msg.press) {
      if (msg.type.includes("vol") || msg.type.includes("fan")) {
        def[byte] = value;
      } else {
        // turn on the defined bit of the byte
        def[byte] |= value;
      }
      msgOut.data = Buffer.from(def);
      // log("We sent - " + msg.type + " to " + msgOut.id)
      can0.send(msgOut);
      clearInterval(sendClimateMsg);
      sendClimateMsg = setInterval(() => {
        msgOut.data = Buffer.from(def);
        can0.send(msgOut);
      }, 250);
    } else {
      // log("Received an action from: " + msg.type + ":" + msg.press)
      clearInterval(sendClimateMsg);
      def[byte] &= ~value;
      msgOut.data = Buffer.from(def);
      // log("We sent - " + msg.type + " to " + msgOut.id)
      can0.send(msgOut);
    }
  });
  ipcMain.on("actionBrightness", (event, msg) => {
    mediumSpeed.brightness.offset = msg.value;
    mediumSpeed.brightness.auto = msg.auto;
    if (!mediumSpeed.brightness.auto) {
      mediumSpeed.brightness.adjustedLight = Math.round(
        msg.value * (255 / 32.5)
      );
      exec(
        "echo " +
          mediumSpeed.brightness.adjustedLight +
          " > /sys/class/backlight/10-0045/brightness"
      );
      mediumSpeedPrev.brightness.adjustedLight =
        mediumSpeed.brightness.adjustedLight;
    }
  });
  ipcMain.on("actionSettings", (event, msg) => {
    let value;
    let byte;
    value = seetingsIds[msg.type].val;
    byte = seetingsIds[msg.type].byte;
  });
  ipcMain.on("canRecorder", (event, msg) => {
    if (msg === "startMS") {
      exec("candump can0");
      canDataMS = "Timestamp,Differance,Node ID,Message\n";
      canRecordingMS = true;
      canDataMSFile = new Date().getTime();
      fs.writeFile(`canBusMS-${canDataMSFile}.csv`, canDataMS, function (err) {
        if (err) throw err;
      });
      canDataMS = "";
    } else if (msg === "endMS") {
      fs.appendFile(`canBusMS-${canDataMSFile}.csv`, canDataMS, function (err) {
        if (err) throw err;
      });
      canRecordingMS = false;
      canDataMS = "";
      canDataMSval = 0;
      canDataMSFile = "";
    }
    if (msg === "startHS") {
      exec("candump can1");
      canDataHS = "Timestamp,Differance,Node ID,Message\n";
      canRecordingHS = true;
      canDataHSFile = new Date().getTime();
      fs.writeFile(`canBusHS-${canDataHSFile}.csv`, canDataHS, function (err) {
        if (err) throw err;
      });
      canDataHS = "";
    } else if (msg === "endHS") {
      fs.appendFile(`canBusHS-${canDataHSFile}.csv`, canDataHS, function (err) {
        if (err) throw err;
      });
      canRecordingHS = false;
      canDataHS = "";
      canDataHSval = 0;
      canDataHSFile = "";
    }
  });
  ipcMain.on("dataFull", (event, msg) => {
    if (msg.includes("mediumSpeed")) {
      window.webContents.send("mediumSpeed", mediumSpeed);
    } else if (msg.includes("vehicleInfo")) {
      window.webContents.send("vehicleInfo", vehicleInfo);
    }
  });
  // Set up the Medium Speed Interval
  setInterval(() => {
    let send = false;
    if (
      mediumSpeed.brightness.adjustedLight !==
      mediumSpeedPrev.brightness.adjustedLight
    ) {
      exec(
        "echo " +
          mediumSpeed.brightness.adjustedLight +
          " > /sys/class/backlight/10-0045/brightness"
      );
    }
    for (const key in mediumSpeed) {
      for (const [info, value] of Object.entries(mediumSpeed[key])) {
        if (value !== mediumSpeedPrev[key][info]) {
          send = true;
          changedMedium[`${key}`][`${info}`] = value;
          mediumSpeedPrev[`${key}`][`${info}`] = value;
        }
      }
      // if ("second" in changedMedium.time) {
      //   changedMedium.time[`${hour}`] = mediumSpeed.time.hour
      //   changedMedium.time[`${minute}`] = mediumSpeed.time.minute
      // }
    }
    if (send) {
      window.webContents.send("mediumSpeed", changedMedium);
      changedMedium = {
        time: {},
        temperature: {},
        indicators: {},
        brightness: {},
        vehicleSettings: {},
      };
    }
  }, 100);
  // Set up the Vehicle Info Interval
  setInterval(() => {
    let send = false;
    for (const key in vehicleInfo) {
      if (vehicleInfo[key] !== vehicleInfoPrev[key]) {
        send = true;
        changedVehicleInfo[`${key}`] = vehicleInfo[key];
        vehicleInfoPrev[`${key}`] = vehicleInfo[key];
      }
    }
    if (send) {
      console.log(changedVehicleInfo);
      window.webContents.send("vehicleInfo", changedVehicleInfo);
      changedVehicleInfo = {};
    }
  }, 100);
};
