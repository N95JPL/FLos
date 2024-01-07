const { Map } = require('../CanMap/canMap')
const { mediumSpeed } = require('../VariableMaps/MediumSpeedVar')

const id = Map
function ms680(msg) {
  const strId = msg.id
  const arr = [...msg.data]
  for (let k in id[strId]) {
    //for each byte, set the relevant object key bit to the value set in the canbus message through bitwise operation
    for (let i = 0; i < id[strId][k].length; i++) {
      mediumSpeed.vehicleSettings[id[strId][parseInt(k)][i.toString()].handle] = !!(
        arr[parseInt(k)] & id[strId][parseInt(k)][i.toString()].val
      )
    }
  }
}

module.exports = ms680
