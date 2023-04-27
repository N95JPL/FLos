const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");

const id = Map;
function ms1249(msg) {
  const strId = msg.id;
  const arr = [...msg.data];
  var temp = (arr[1] / 2) - 57 // This is weird.. but eh it works.. apparently it's a Volvo thing
  temp = temp.toFixed(1); // Formatting
  mediumSpeed.temperature.interior = temp;
}

module.exports = ms1249;
