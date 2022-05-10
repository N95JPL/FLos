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
    offset: 20,
    setOffset: (offset) => set({ offset }),
    auto: true,
    setAuto: (auto) => set({ auto }),
    adjustedLight: 255,
    setAdjustedLight: (adjustedLight) => set({ adjustedLight }),
  },
}));
