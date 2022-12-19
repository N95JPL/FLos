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
    brightness: 0,
    adjustedBrightness: 0,
    offset: 20,
    auto: true,
  },
  vehicle: {
    alternator: [],
    gear: 0,
    voltage: [],
    charging_current: [],
  },
  vehicleSettings: {
    Drive_Away_Locking_5: false,
    Drive_Away_Locking_10: false,
    Drive_Away_Locking_15: false,
    Passive_Arming: false,
    AutoLock: false,
    Alarm_Sensors: false,
    Two_Stage_Locking: false,
    Global_Windows_Open: false,
    Global_Windows_Close: false,
    Mirror_Fold: false,
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
    brightness: 0,
    adjustedBrightness: 0,
    offset: 20,
    auto: true,
  },
  vehicle: {
    alternator: [],
    gear: 0,
    voltage: [],
    charging_current: [],
  },
  vehicleSettings: {
    Drive_Away_Locking_5: false,
    Drive_Away_Locking_10: false,
    Drive_Away_Locking_15: false,
    Passive_Arming: false,
    AutoLock: false,
    Alarm_Sensors: false,
    Two_Stage_Locking: false,
    Global_Windows_Open: false,
    Global_Windows_Close: false,
    Mirror_Fold: false,
  },
};
exports.mediumSpeedPrev = mediumSpeedPrev;
