const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");

const id = Map;
function ms72(msg) {
	const strId = msg.id;
	const arr = [...msg.data];
	mediumSpeed.temperature.interior = arr[4] - 40;
}

//module.exports = ms72;
