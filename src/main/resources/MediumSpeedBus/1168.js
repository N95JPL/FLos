import { mediumSpeed } from '../VariableMaps/MediumSpeedVar'

export function ms1168(msg) {
  const arr = [...msg.data]

  var temp = ((arr[5] + arr[6]) / 100) * 0.62137119 // Join bytes, add the scalar, convert km/h to mph
  mediumSpeed.vehicle.speed = temp
  // console.log(temp)
}

module.exports = ms1168
