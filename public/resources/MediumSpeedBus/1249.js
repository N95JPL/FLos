const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");

const id = Map;
function ms1249(msg) {
  const strId = msg.id;
  const arr = [...msg.data];
  var temp = (arr[1] / 2) - 57
  temp = temp.toFixed(1);
  mediumSpeed.temperature.interior = temp;
}

module.exports = ms1249;
