/* eslint-disable no-unused-vars */
const { mediumSpeed } = require("./VariableMaps/MediumSpeedVar");
const { Map } = require("./CanMap/canMap");
const ms40 = require("./MediumSpeed/40");
const ms72 = require("./MediumSpeed/72");
const ms520 = require("./MediumSpeed/520");
const ms680 = require("./MediumSpeed/680");
const ms840 = require("./MediumSpeed/840");
const ms888 = require("./MediumSpeed/888");
const ms1025 = require("./MediumSpeed/1025");
const ms1026 = require("./MediumSpeed/1026");
const IDs = [40, 72, 520, 680, 840, 888, 1025, 1026];

function parseMediumSpeed(msg, window) {
  if (IDs.includes(msg.id)) {
    // console.log("Medium Speed Message Received: " + msg.id)
    if (msg.id === 40) {
      ms40(msg);
    } else if (msg.id === 72) {
      ms72(msg);
    } else if (msg.id === 520) {
      ms520(msg);
    } else if (msg.id === 680) {
      ms680(msg);
    } else if (msg.id === 840) {
      ms840(msg);
    } else if (msg.id === 888) {
      ms888(msg);
    } else if (msg.id === 1025) {
      ms1025(msg, window);
    } else if (msg.id === 1026) {
      ms1026(msg, window);
    }
  }
}
module.exports = parseMediumSpeed;
