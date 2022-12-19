import create from "zustand";

export let mediumSpeed = create((set) => ({
  time: {
    hour: 0,
    setHour: (hour) => set({ hour }),
    minute: 0,
    setMinute: (minute) => set({ minute }),
    second: 0,
    setSecond: (second) => set({ second }),
  },
  temperature: {
    driver: 0,
    setDriver: (driver) => set({ driver }),
    passenger: 0,
    setPassenger: (passenger) => set({ passenger }),
    interior: 0,
    setInterior: (interior) => set({ interior }),
  },
  indicators: {
    rearHeater: 0,
    setRearHeater: (rearHeater) => set({ rearHeater }),
    auto: 0,
    setAuto: (auto) => set({ auto }),
    defrost: 0,
    setDefrost: (defrost) => set({ defrost }),
    frontHeater: 0,
    setFrontHeater: (frontHeater) => set({ frontHeater }),
    recirc: 0,
    setRecirc: (recirc) => set({ recirc }),
  },
  brightness: {
    brightness: 0,
    setBrightness: (brightness) => set({ brightness }),
    offset: 20,
    setOffset: (offset) => set({ offset }),
    auto: true,
    setAuto: (auto) => set({ auto }),
    adjustedBrightness: 255,
    setAdjustedBrightness: (adjustedBrightness) => set({ adjustedBrightness }),
  },
  vehicle: {
    gear: 0,
    setGear: (gear) => set({ gear }),
    alternator: [{ name: "Alternator", alternator: 0 }],
    setAlternator: (alternator) => set({ alternator }),
    voltage: [{ name: "Battery", voltage: 0 }],
    setVoltage: (voltage) => set({ voltage }),
    charging_current: [{
      name: "Charging", charging: 0
    }],
    setCharging_current: (charging_current) => set({ charging_current }),
  },
  vehicleSettings: {
    Drive_Away_Locking_5: false,
    setDrive_Away_Locking_5: (Drive_Away_Locking_5) =>
      set({ Drive_Away_Locking_5 }),
    Drive_Away_Locking_10: true,
    setDrive_Away_Locking_10: (Drive_Away_Locking_10) =>
      set({ Drive_Away_Locking_10 }),
    Drive_Away_Locking_15: true,
    setDrive_Away_Locking_15: (Drive_Away_Locking_15) =>
      set({ Drive_Away_Locking_15 }),
    Passive_Arming: false,
    setPassive_Arming: (Passive_Arming) => set({ Passive_Arming }),
    AutoLock: false,
    setAutoLock: (AutoLock) => set({ AutoLock }),
    Alarm_Sensors: false,
    setAlarm_Sensors: (Alarm_Sensors) => set({ Alarm_Sensors }),
    Two_Stage_Locking: false,
    setTwo_Stage_Locking: (Two_Stage_Locking) => set({ Two_Stage_Locking }),
    Global_Windows_Open: false,
    setGlobal_Windows_Open: (Global_Windows_Open) =>
      set({ Global_Windows_Open }),
    Global_Windows_Close: false,
    setGlobal_Windows_Close: (Global_Windows_Close) =>
      set({ Global_Windows_Close }),
    Mirror_Fold: false,
    setMirror_Fold: (Mirror_Fold) => set({ Mirror_Fold }),
  },
}));
