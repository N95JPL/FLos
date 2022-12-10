const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");

function ms840(msg) {
  const arr = [...msg.data];
  mediumSpeed.vehicle.alternator = arr[3];
  console.log("Alternator: " + mediumSpeed.vehicle.alternator + "A")
}

module.exports = ms840;
