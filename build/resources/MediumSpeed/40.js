const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");

const id = Map;
function ms40(msg) {
    const strId = msg.id;
    const arr = [...msg.data];
    if (mediumSpeed.brightness.auto) {
        mediumSpeed.brightness.adjustedLight = Math.round(
            (arr[2] / 255) * mediumSpeed.brightness.offset * 100
        );
    }
}

module.exports = ms40;