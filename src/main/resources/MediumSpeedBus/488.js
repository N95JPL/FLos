import { mediumSpeed } from "../VariableMaps/MediumSpeedVar";

// Need to confirm this actually works

export function ms488(msg) {
	mediumSpeed.active = msg.data.readUint8(1) & 128;

	if (mediumSpeed.active) {
		let tempData = msg.data.readUint32BE(1);
		tempData = (tempData << 12) >>> 12;
		const mask = 31;
		mediumSpeed.frontLeft = tempData & mask;
		mediumSpeed.frontRight = (tempData >>> 15) & mask;
		mediumSpeed.frontLeftMiddle = (tempData >>> 5) & mask;
		mediumSpeed.frontRightMiddle = (tempData >>> 10) & mask;
		tempData = msg.data.readUint32BE(4);
		tempData = (tempData << 12) >>> 12;
		mediumSpeed.rearLeft = tempData & mask;
		mediumSpeed.rearRight = (tempData >>> 10) & mask;
		mediumSpeed.rearLeftMiddle = (tempData >>> 5) & mask;
		mediumSpeed.rearRightMiddle = (tempData >>> 15) & mask;
	}
}

module.exports = ms488;
