import { mediumSpeed } from "../VariableMaps/MediumSpeedVar";

// This is pretty much self explanatory, but I'll explain it anyway.
// The first 3 lines are just setting up the variables and such.
// The next 3 lines are getting the time from the message.
// The next 3 lines are formatting the time.
// The last 3 lines are setting the time in the variable map.

export function ms1234(msg) {
	const arr = [...msg.data];
	arr[5] &= ~64;
	arr[5] &= ~128;
	arr[6] &= ~128;
	arr[7] &= ~128;
	var hour = arr[5];
	var minute = arr[6];
	var second = arr[7];
	mediumSpeed.hour = hour < 10 ? "0" + arr[5] : arr[5];
	mediumSpeed.minute = minute < 10 ? "0" + arr[6] : arr[6];
	mediumSpeed.second = second < 10 ? "0" + arr[7] : arr[7];
	// console.log(mediumSpeed.time.hour + ':' + mediumSpeed.time.minute + ':' + mediumSpeed.time.second)
}

//module.exports = ms1234;
