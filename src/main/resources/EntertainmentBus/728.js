import { entertainmentBus } from "../VariableMaps/EntertainmentBusVar";

export function eb728(msg) {
	const arr = [...msg.data];

	var volumeRaw = arr[1];
	var volume = ((volumeRaw - 4) / 8).toFixed(0);

	if (entertainmentBus.volume != volume) {
		clearTimeout(entertainmentBus.volumeControl);
		entertainmentBus.volume = volume;
		entertainmentBus.volumeChange = true;
		entertainmentBus.volumeControl = setTimeout(() => {
			entertainmentBus.volumeChange = false;
		}, 2000);
	}
}
