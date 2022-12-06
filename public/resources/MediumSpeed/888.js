const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");
const id = Map;

function ms888(msg) {
  const strId = msg.id;
  const arr = [...msg.data];
  mediumSpeed.time.hour =
    arr[5] - 128 < 10 ? "0" + (arr[5] - 128) : arr[5] - 128;
  mediumSpeed.time.minute = arr[6] < 10 ? "0" + arr[6] : arr[6];
  mediumSpeed.time.second = arr[7] < 10 ? "0" + arr[7] : arr[7];
}

module.exports = ms888;
