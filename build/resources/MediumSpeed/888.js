const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");
const { bitwise } = require("./utils");
const id = Map;

function ms888(msg) {
  const strId = msg.id;
  const arr = [...msg.data];
  var hour = bitwise(arr[5], 32);
  var minute = bitwise(arr[6], 64);
  var second = bitwise(arr[7], 64);
  mediumSpeed.time.hour =
    hour < 10 ? "0" + hour : hour;
  mediumSpeed.time.minute = minute < 10 ? "0" + minute : minute;
  mediumSpeed.time.second = second < 10 ? "0" + second : second;
}

module.exports = ms888;