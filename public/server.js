const { exec } = require("child_process");
const { ipcMain } = require("electron");
const {
  mediumSpeed,
  mediumSpeedPrev,
} = require("./resources/VariableMaps/MediumSpeedVar");
const { Map } = require("./resources/CanMap/canMap");
const { Out } = require("./resources/CanMap/canOut");
const can = require("socketcan");
const fs = require("fs");
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

  const msID = [968, 904, 680, 520, 40, 360, 72, 888];

  let canIds = Map;
  const outIds = Out;
  canIds = JSON.stringify(canIds);
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
  // create indicator object, this sends the status of all leds over the socket
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

  let parseMediumSpeed = require("./resources/MediumSpeed");
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
    if (msID.includes(msg.id)) {
      parseMediumSpeed(msg, canIds, window, mediumSpeed.brightness);
    }
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
  ipcMain.on("action", (event, msg) => {
    let value;
    let byte;
    if (msg.type !== "brightness") {
      value = outIds[msg.type].val;
      byte = outIds[msg.type].byte;
    }
    if (msg.type === "brightness") {
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
    } else if (msg.press) {
      if (msg.type.includes("vol") || msg.type.includes("fan")) {
        def[byte] = value;
      } else {
        // turn on the defined bit of the byte
        def[byte] |= value;
      }
      msgOut.data = Buffer.from(def);
      can0.send(msgOut);
      sendClimateMsg = setInterval(() => {
        msgOut.data = Buffer.from(def);
        can0.send(msgOut);
      }, 250);
    } else {
      clearInterval(sendClimateMsg);
      def[byte] &= ~value;
      msgOut.data = Buffer.from(def);
      can0.send(msgOut);
    }
  });
  ipcMain.on("canRecorder", (event, msg) => {
    if (msg === "startMS") {
      exec("candump -l can0");
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
      exec("candump -l can1");
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
  ipcMain.on("DataFULL", (event, msg) => {
    if (msg.includes("mediumSpeed")) {
      window.webContents.send("mediumSpeed", mediumSpeed);
    }
  });
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
};
let changedMedium = {
  time: {},
  temperature: {},
  indicators: {},
  brightness: {},
  vehicleSettings: {},
};
