const { Map } = require("../CanMap/canMap");
const { mediumSpeed } = require("../VariableMaps/MediumSpeedVar");


// Need to confirm this actually works
const id = Map;
function ms488(msg) {
  const strId = msg.id;
  const arr = [...msg.data];
  mediumSpeed.parking.active = msg.data.readUint8(1) & 128

  if (mediumSpeed.parking.active) {
    let tempData = msg.data.readUint32BE(1)
    tempData = ((tempData << 12) >>> 12)
    const mask = 31
    mediumSpeed.parking.frontLeft = tempData & mask
    mediumSpeed.parking.frontRight = (tempData >>> 15) & mask
    mediumSpeed.parking.frontLeftMiddle = (tempData >>> 5) & mask
    mediumSpeed.parking.frontRightMiddle = (tempData >>> 10) & mask
    tempData = msg.data.readUint32BE(4)
    tempData = ((tempData << 12) >>> 12)
    mediumSpeed.parking.rearLeft = tempData & mask
    mediumSpeed.parking.rearRight = (tempData >>> 10) & mask
    mediumSpeed.parking.rearLeftMiddle = (tempData >>> 5) & mask
    mediumSpeed.parking.rearRightMiddle = (tempData >>> 15) & mask
  }
}

module.exports = ms488;
