const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");
const { bitwise } = require("./utils");

const id = Map;
function ms424(msg) {
  const strId = msg.id;
  const arr = [...msg.data];

  mediumSpeed.vehicle.voltage = ((12.750000189975 * (arr[3] / 255)) + 6).toFixed(2);
  console.log(mediumSpeed.vehicle.voltage + "V")
  mediumSpeed.vehicle.charging_current = arr[5] - 127;
  console.log(mediumSpeed.vehicle.charging_current + "A")
}

module.exports = ms424;
