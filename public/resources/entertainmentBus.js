/* eslint-disable no-unused-vars */
const { entertainmentBus } = require("./VariableMaps/EntertainmentBusVar");
const { Map } = require("./CanMap/canMap");

const eb486 = require("./EntertainmentBus/486");
const eb692 = require("./EntertainmentBus/692");
const eb728 = require("./EntertainmentBus/728");
const eb757 = require("./EntertainmentBus/757");

const IDs = [486, 692, 728, 757];

function parseEntertainmentBus(msg, window) {
  // console.log("Entertainment Bus Message Received: " + msg.id)
  if (IDs.includes(msg.id)) {
    if (msg.id === 486) {
      new eb486(msg);
    } else if (msg.id === 692) {
      new eb692(msg);
    } else if (msg.id === 728) {
      new eb728(msg);
    } else if (msg.id === 757) {
      new eb757(msg);
    }
  }
}
module.exports = parseEntertainmentBus;
