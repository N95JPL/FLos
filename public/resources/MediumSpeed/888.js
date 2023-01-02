const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");
const id = Map;

function ms888(msg) {
  const strId = msg.id;
  const arr = [...msg.data];
  arr[5] &= ~64;
  arr[5] &= ~128;
  arr[6] &= ~128;
  arr[7] &= ~128;
  var hour = arr[5];
  var minute = arr[6];
  var second = arr[7];
  mediumSpeed.time.hour =
    hour < 10 ? "0" + hour : hour;
  mediumSpeed.time.minute = minute < 10 ? "0" + minute : minute;
  mediumSpeed.time.second = second < 10 ? "0" + second : second;
}

module.exports = ms888;