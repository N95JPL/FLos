/* eslint-disable prefer-const */
let mediumSpeed = {
  time: {
    hour: 0,
    minute: 0,
    second: 0,
  },
  temperature: {
    driver: "--",
    passenger: "--",
    interior: "--",
  },
  indicators: {
    rearHeater: 0,
    auto: 0,
    defrost: 0,
    frontHeater: 0,
    recirc: 0,
  },
  brightness: {
    adjustedLight: 0,
    offset: 20,
    auto: true,
  },
};
exports.mediumSpeed = mediumSpeed;

let mediumSpeedPrev = {
  time: {
    hour: 0,
    minute: 0,
    second: 0,
  },
  temperature: {
    driver: "--",
    passenger: "--",
    interior: "--",
  },
  indicators: {
    rearHeater: 0,
    auto: 0,
    defrost: 0,
    frontHeater: 0,
    recirc: 0,
  },
  brightness: {
    adjustedLight: 0,
    offset: 20,
    auto: true,
  },
};
exports.mediumSpeedPrev = mediumSpeedPrev;
