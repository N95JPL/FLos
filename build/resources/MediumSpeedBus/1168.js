const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");

const id = Map;
function ms1168(msg) {
  const strId = msg.id;
  const arr = [...msg.data];

  var temp = ((arr[5] + arr[6]) / 100) * 0.62137119; // Join bytes, add the scalar, convert km/h to mph
  mediumSpeed.vehicle.speed = temp;
}

module.exports = ms1168;
