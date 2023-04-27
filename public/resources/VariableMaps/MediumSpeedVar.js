/* eslint-disable prefer-const */
let mediumSpeed = {
  parking: {
    frontLeft: 0,
    frontLeftMiddle: 0,
    frontRightMiddle: 0,
    frontRight: 0,
    rearLeft: 0,
    rearLeftMiddle: 0,
    rearRightMiddle: 0,
    rearRight: 0,
    active: false
  },
  time: {
    hour: 0,
    minute: 0,
    second: 0,
  },
  temperature: {
    interior: "--",
    exterior: "--",
    coolant: "--",
  },
  brightness: {
    brightness: 0,
    adjustedBrightness: 0,
    offset: 20,
    auto: true,
  },
  vehicle: {
    speed: 0,
    fuel: 0,
    alternator: 0,
    gear: 0,
    voltage: 0,
    charging_current: 0,
  },
};
exports.mediumSpeed = mediumSpeed;

let mediumSpeedPrev = {
  parking: {
    frontLeft: 0,
    frontLeftMiddle: 0,
    frontRightMiddle: 0,
    frontRight: 0,
    rearLeft: 0,
    rearLeftMiddle: 0,
    rearRightMiddle: 0,
    rearRight: 0,
    active: false
  },
  time: {
    hour: 0,
    minute: 0,
    second: 0,
  },
  temperature: {
    interior: "--",
    exterior: "--",
    coolant: "--",
  },
  brightness: {
    brightness: 0,
    adjustedBrightness: 0,
    offset: 20,
    auto: true,
  },
  vehicle: {
    speed: 0,
    fuel: 0,
    alternator: 0,
    gear: 0,
    voltage: 0,
    charging_current: 0,
  },
};
exports.mediumSpeedPrev = mediumSpeedPrev;
