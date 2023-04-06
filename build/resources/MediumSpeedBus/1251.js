const { FaTemperatureHigh } = require("react-icons/fa");
const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");

const id = Map;
function ms1251(msg) {
  const strId = msg.id;
  const arr = [...msg.data];

  var temp = [];
  temp[0] = arr[3].toString(16)

  temp[1] = arr[4].toString(16)

  temp = temp.join("");
  console.log(temp)
  temp = (parseInt(temp, 16) / 4) - 128;
  temp = temp.toFixed(2);
  mediumSpeed.temperature.exterior = temp;
  console.log(temp)
}

module.exports = ms1251;
