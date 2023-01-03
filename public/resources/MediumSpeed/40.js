const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");

const id = Map;
function ms40(msg) {
  const strId = msg.id;
  const arr = [...msg.data];
  mediumSpeed.brightness.brightness = arr[2];
  if (mediumSpeed.brightness.auto) {
    mediumSpeed.brightness.adjustedBrightness = Math.round(
      (arr[2] / 255) * mediumSpeed.brightness.offset * 100
    );
  }
  switch (arr[4]) {
    case arr[4] & 1:
      mediumSpeed.vehicle.gear = "Reverse";
      break;
    case arr[4] & 2:
      mediumSpeed.vehicle.gear = "Neutral";
      break;
    case arr[4] & 4:
      mediumSpeed.vehicle.gear = "Drive";
      break;
    case arr[4] & 8:
      mediumSpeed.vehicle.gear = "Sport";
      break;
    default:
      mediumSpeed.vehicle.gear = "Park";
      break;
  }
}

module.exports = ms40;
