import { entertainmentBus } from "../VariableMaps/EntertainmentBusVar";

export function eb757(msg) {
	const arr = [...msg.data];
	if (arr[0] == 16) {
		entertainmentBus.source = "FM";
	} else if (arr[0] == 48) {
		entertainmentBus.source = "FM-AST";
	} else if (arr[0] == 64) {
		entertainmentBus.source = "AM";
	} else if (arr[0] == 80) {
		entertainmentBus.source = "AM-AST";
	} else if (arr[0] == 96) {
		//Seems odd that this one is missing?
	} else if (arr[0] == 112) {
		entertainmentBus.source = "DAB1";
	} else if (arr[0] == 128) {
		entertainmentBus.source = "DAB2";
	}
}
