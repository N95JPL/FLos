const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");
const id = Map;

// Some stupid bitshifting to get the fuel level
// Only requires 10 out of the 16 bits so turn first 6 off

function ms1236(msg) {
  const strId = msg.id;
  const arr = [...msg.data];
  var temp = [];

  // Parse fuel level
  temp[0] = arr[6].toString(16);
  // Turning off unrelated bits
  temp[0] = temp[0] &= ~(1 << 0);
  temp[0] = temp[0] &= ~(1 << 1);
  temp[0] = temp[0] &= ~(1 << 2);
  temp[0] = temp[0] &= ~(1 << 3);
  temp[0] = temp[0] &= ~(1 << 4);
  temp[0] = temp[0] &= ~(1 << 5);
  temp[1] = arr[7].toString(16)
  temp = temp.join("");
  temp = (parseInt(temp, 16) / 5);
  temp = temp.toFixed(1);
  mediumSpeed.vehicle.fuel = temp;
}

module.exports = ms1236;
