const { mediumSpeed } = require('../VariableMaps/MediumSpeedVar')

function ms840(msg) {
  const arr = [...msg.data]
  mediumSpeed.vehicle.alternator = arr[3]
}

module.exports = ms840
