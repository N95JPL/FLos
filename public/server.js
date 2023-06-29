const { exec } = require("child_process");
const { ipcMain } = require("electron");
const {
  mediumSpeed,
  mediumSpeedPrev,
} = require("./resources/VariableMaps/MediumSpeedVar");
const { entertainmentBus, entertainmentBusPrev } = require("./resources/VariableMaps/EntertainmentBusVar");
const {
  vehicleInfo,
  vehicleInfoPrev,
} = require("./resources/VariableMaps/VehicleInfoVar");
const can = require("socketcan");
const fs = require("fs");
let parseMediumSpeed = require("./resources/MediumSpeed");
const parseEntertainmentBus = require("./resources/entertainmentBus");

let msCanDump = "";
let hsCanDump = "";

let changedMedium = { // Best not to change this
  parking: {},
  time: {},
  temperature: {},
  brightness: {},
  vehicle: {},
};
let changedEntertainmentBus = {};
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
    exec( // Create virtual can interfaces
      "sudo modprobe vcan && sudo ip link add dev can0 type vcan && sudo ip link add dev can1 type vcan && sudo ip link set up can0 && sudo ip link set up can1 && sudo modprobe can-gw && sudo cangw -A -s can0 -d can1 -e && sudo cangw -A -s can1 -d can0 -e"
    );
    can0 = can.createRawChannel("can0", true);
    can1 = can.createRawChannel("can1", true);
  }
  ipcMain.on("vehicleInfo", (event, msg) => {
    // console.log("Message about vehicle from UI");
    for (let key in msg) {
      if (msg[key] !== "-") {
        vehicleInfo[key] = msg[key];
      }
    }
    // console.log(vehicleInfo);
  });
  // sudo modprobe vcan && sudo ip link add dev can0 type vcan && sudo ip link add dev can1 type vcan && sudo ip link set up can0 && sudo ip link set up can1 && sudo modprobe can-gw && sudo cangw -A -s can0 -d can1 -e && sudo cangw -A -s can1 -d can0 -e
  can0.addListener("onMessage", function (msg) { // Medium Speed Bus
    if (canRecordingMS) {
      canDataMS +=
        Date.now() + ", ," + msg.id + "," + msg.data.toString("hex") + "\n";
      canDataMSval++;
    }

    if (canDataMSval === 400) { // Save every 400 messages
      fs.appendFile(`canBusMS-${canDataMSFile}.csv`, canDataMS, function (err) {
        if (err) throw err;
      });
      canDataMS = "";
      canDataMSval = "";
    }
    parseMediumSpeed(msg, window);
  });
  can1.addListener("onMessage", function (msg) { // Ent. Speed Bus
    if (canRecordingHS) {
      canDataHS +=
        Date.now() + ", ," + msg.id + "," + msg.data.toString("hex") + "\n";
      canDataHSval++;
    }
    if (canDataHSval === 400) { // Save every 400 messages
      fs.appendFile(`canBusHS-${canDataHSFile}.csv`, canDataHS, function (err) {
        if (err) throw err;
      });
      canDataHS = "";
      canDataHSval = "";
    }
    parseEntertainmentBus(msg, window);
  });
  can0.start();
  can1.start();
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
  // ipcMain.on("actionSettings", (event, msg) => {
  //   let value;
  //   let byte;
  //   value = seetingsIds[msg.type].val;
  //   byte = seetingsIds[msg.type].byte;
  // });
  ipcMain.on("canRecorder", (event, msg) => {
    if (msg === "startMS") {
      msCanDump = exec("candump -l can0");
      canDataMS = "Timestamp,Differance,Node ID,Message\n";
      canRecordingMS = true;
      canDataMSFile = new Date().getTime();
      fs.writeFile(`canBusMS-${canDataMSFile}.csv`, canDataMS, function (err) {
        if (err) throw err;
      });
      canDataMS = "";
    } else if (msg === "endMS") {
      msCanDump.kill('SIGINT');
      fs.appendFile(`canBusMS-${canDataMSFile}.csv`, canDataMS, function (err) {
        if (err) throw err;
      });
      canRecordingMS = false;
      canDataMS = "";
      canDataMSval = 0;
      canDataMSFile = "";
    }
    if (msg === "startHS") {
      hsCanDump = exec("candump -l can1");
      canDataHS = "Timestamp,Differance,Node ID,Message\n";
      canRecordingHS = true;
      canDataHSFile = new Date().getTime();
      fs.writeFile(`canBusHS-${canDataHSFile}.csv`, canDataHS, function (err) {
        if (err) throw err;
      });
      canDataHS = "";
    } else if (msg === "endHS") {
      hsCanDump.kill('SIGINT');
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
        parking: {},
        time: {},
        temperature: {},
        brightness: {},
        vehicle: {},
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
      // console.log(changedVehicleInfo);
      window.webContents.send("vehicleInfo", changedVehicleInfo);
      changedVehicleInfo = {};
    }
  }, 100);
  setInterval(() => {
    let send = false;
    for (const key in entertainmentBus) {
      if (entertainmentBus[key] !== entertainmentBusPrev[key]) {
        if (key != "volumeControl") { // Volume Control is a special case
          send = true;
          changedEntertainmentBus[`${key}`] = entertainmentBus[key];
          entertainmentBusPrev[`${key}`] = entertainmentBus[key];
        }
      }
    }
    if (send) {
      // console.log(changedVehicleInfo);
      window.webContents.send("entertainmentBus", changedEntertainmentBus);
      changedEntertainmentBus = {};
    }
  }, 100);
};
