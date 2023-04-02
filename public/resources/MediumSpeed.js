/* eslint-disable no-unused-vars */
const { mediumSpeed } = require("./VariableMaps/MediumSpeedVar");
const { Map } = require("./CanMap/canMap");
const ms488 = require("./MediumSpeedBus/488");
const ms1234 = require("./MediumSpeedBus/1234");
const ms1025 = require("./MediumSpeedBus/1025");
const IDs = [488, 1025, 1234];

function parseMediumSpeed(msg, window) {
  if (IDs.includes(msg.id)) {
    // console.log("Medium Speed Message Received: " + msg.id)
    if (msg.id === 488) {
      new ms488(msg);
    } else if (msg.id === 1025) {
      new ms1025(msg, window);
    } else if (msg.id === 1234) {
      new ms1234(msg, window);
    }
  }
}
module.exports = parseMediumSpeed;
