import { Map } from "../CanMap/canMap";
import { mediumSpeed } from "../VariableMaps/MediumSpeedVar";

const id = Map;
function ms472(msg) {
	const strId = msg.id;
	const arr = [...msg.data];
	let speed = msg.data.readUIntBE(1, 2);
	mediumSpeed.vehicle.speed = ((speed * 0.65) / 100).toFixed(1);
}

export default ms472;
