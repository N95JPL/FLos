import { mediumSpeed } from "../VariableMaps/MediumSpeedVar";

export function ms1251(msg) {
	const arr = [...msg.data];

	var temp = [];
	// Parse exterior temperature
	// Like the Fuel Level, only requires 10 out of the 16 bits
	// So turn off the first 6 bits
	temp[0] = arr[3].toString(16); //.toString(16)
	temp[0] = temp[0] &= ~(1 << 0);
	temp[0] = temp[0] &= ~(1 << 1);
	temp[0] = temp[0] &= ~(1 << 2);
	temp[0] = temp[0] &= ~(1 << 3);
	temp[0] = temp[0] &= ~(1 << 4);
	temp[0] = temp[0] &= ~(1 << 5);
	temp[1] = arr[4].toString(16);
	temp = temp.join("");
	temp = parseInt(temp, 16) / 4;
	temp = Math.ceil(temp * 2) / 2;
	temp = temp.toFixed(1);
	mediumSpeed.exterior = temp;

	// Parse coolant temperature
	temp = parseInt(arr[0], 16) - 60;
	mediumSpeed.coolant = temp;
}

//module.exports = ms1251;
