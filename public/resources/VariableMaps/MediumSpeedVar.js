/* eslint-disable prefer-const */
let mediumSpeed = {
  time: {
    hour: 0,
    minute: 0,
    second: 0
  },
  temperature: {
    driver: '--',
    passenger: '--',
    interior: '--'
  },
  indicators: {
    rearHeater: 0,
    auto: 0,
    defrost: 0,
    frontHeater: 0,
    recirc: 0
  }
}
exports.mediumSpeed = mediumSpeed

let mediumSpeedPrev = {
  time: {
    hour: 0,
    minute: 0,
    second: 0
  },
  temperature: {
    driver: '--',
    passenger: '--',
    interior: '--'
  },
  indicators: {
    rearHeater: 0,
    auto: 0,
    defrost: 0,
    frontHeater: 0,
    recirc: 0
  }
}
exports.mediumSpeedPrev = mediumSpeedPrev
