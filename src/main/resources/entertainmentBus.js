/* eslint-disable no-unused-vars */
import { eb486 } from "./EntertainmentBus/486";
import { eb692 } from "./EntertainmentBus/692";
import { eb728 } from "./EntertainmentBus/728";
import { eb757 } from "./EntertainmentBus/757";

const IDs = [486, 692, 728, 757];

export function parseEntertainmentBus(msg, window) {
	// console.log("Entertainment Bus Message Received: " + msg.id)
	if (IDs.includes(msg.id)) {
		if (msg.id === 486) {
			new eb486(msg);
		} else if (msg.id === 692) {
			new eb692(msg);
		} else if (msg.id === 728) {
			new eb728(msg);
		} else if (msg.id === 757) {
			new eb757(msg);
		}
	}
}
