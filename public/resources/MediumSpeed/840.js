const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");

function ms840(msg) {
  const arr = [...msg.data];
  mediumSpeed.vehicle.alternator.push({ alternator: arr[3] });
  if (mediumSpeed.vehicle.alternator.length > 100) {
    mediumSpeed.vehicle.alternator.shift();
  }
}

module.exports = ms840;
