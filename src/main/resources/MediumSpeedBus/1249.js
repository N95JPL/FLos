import { mediumSpeed } from '../VariableMaps/MediumSpeedVar'

export function ms1249(msg) {
  const arr = [...msg.data]
  var temp = arr[1] / 2 - 57 // This is weird.. but eh it works.. apparently it's a Volvo thing
  temp = temp.toFixed(1) // Formatting
  mediumSpeed.temperature.interior = temp
}

module.exports = ms1249
