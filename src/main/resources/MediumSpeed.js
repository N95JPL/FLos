/* eslint-disable no-unused-vars */
import { ms488 } from "./MediumSpeedBus/488";
import { ms1025 } from "./MediumSpeedBus/1025";
import { ms1168 } from "./MediumSpeedBus/1168";
import { ms1234 } from "./MediumSpeedBus/1234";
import { ms1236 } from "./MediumSpeedBus/1236";
import { ms1249 } from "./MediumSpeedBus/1249";
import { ms1251 } from "./MediumSpeedBus/1251";

const IDs = [488, 1025, 1168, 1234, 1236, 1249, 1251];

export function parseMediumSpeed(msg, window) {
	if (IDs.includes(msg.id)) {
		// console.log('Medium Speed Message Received: ' + msg.id)
		if (msg.id === 488) {
			new ms488(msg);
		} else if (msg.id === 1025) {
			new ms1025(msg, window);
		} else if (msg.id === 1168) {
			new ms1168(msg, window);
		} else if (msg.id === 1234) {
			new ms1234(msg, window);
		} else if (msg.id === 1236) {
			new ms1236(msg);
		} else if (msg.id === 1249) {
			new ms1249(msg);
		} else if (msg.id === 1251) {
			new ms1251(msg);
		}
	}
}
