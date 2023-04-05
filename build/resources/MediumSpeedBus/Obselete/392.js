const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");

const id = Map;
function ms392(msg) {
  const strId = msg.id;
  const arr = [...msg.data];
  mediumSpeed.temperature.exterior = arr[0] - 40;
}

module.exports = ms392;
