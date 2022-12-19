const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");
const { bitwise } = require("./utils");

const id = Map;
function ms424(msg) {
  const strId = msg.id;
  const arr = [...msg.data];

  mediumSpeed.vehicle.voltage.push({ name: "Battery", voltage: ((12.750000189975 * (arr[3] / 255)) + 6).toFixed(2) });
  if (mediumSpeed.vehicle.voltage.length > 100) {
    mediumSpeed.vehicle.voltage.shift();
  }
  mediumSpeed.vehicle.charging_current.push({ charging: arr[5] - 127 });
  if (mediumSpeed.vehicle.charging_current.length > 100) {
    mediumSpeed.vehicle.charging_current.shift();
  }
}

module.exports = ms424;
