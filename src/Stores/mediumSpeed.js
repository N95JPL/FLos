import create from "zustand";
import produce from "immer";

export const time = create((set) => ({
  hour: 0,
  setHour: (hour) => set({ hour }),
  minute: 0,
  setMinute: (minute) => set({ minute }),
  second: 0,
  setSecond: (second) => set({ second }),
}));

export const temperature = create((set) => ({
  driver: 0,
  setDriver: (driver) => set({ driver }),
  passenger: 0,
  setPassenger: (passenger) => set({ passenger }),
  interior: 0,
  setInterior: (interior) => set({ interior }),
}));

export const indicators = create((set) => ({
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
}));

export const brightness = create((set) => ({
  brightness: 0,
  setBrightness: (brightness) => set({ brightness }),
  offset: 20,
  setOffset: (offset) => set({ offset }),
  auto: true,
  setAuto: (auto) => set({ auto }),
  adjustedBrightness: 255,
  setAdjustedBrightness: (adjustedBrightness) => set({ adjustedBrightness }),
}));

export const vehicle = create((set) => ({
  gear: 0,
  setGear: (gear) => set({ gear }),
  alternator: 0,
  setAlternator: (alternator) => set({ alternator }),
  alternator_graph: [{}],
  setAlternator_graph: (payload) =>
    set(
      produce((draft) => {
        draft.alternator_graph.push({
          name: Date.now(),
          alternator: payload,
        });
        if (draft.alternator_graph.length > 100) {
          draft.alternator_graph.shift();
        }
      })
    ),
  voltage: 0,
  setVoltage: (voltage) => set({ voltage }),
  voltage_graph: [{}],
  setVoltage_graph: (payload) =>
    set(
      produce((draft) => {
        draft.voltage_graph.push({
          name: Date.now(),
          value: payload,
        });
        if (draft.voltage_graph.length > 100) {
          draft.voltage_graph.shift();
        }
      })
    ),
  charging_current: 0,
  setCharging_current: (charging_current) => set({ charging_current }),
  charging_current_graph: [{}],
  setCharging_current_graph: (payload) =>
    set(
      produce((draft) => {
        draft.charging_current_graph.push({
          name: Date.now(),
          charging_current: parseInt(payload),
        });
        if (draft.charging_current_graph.length > 100) {
          draft.charging_current_graph.shift();
        }
      })
    ),
}));

export const vehicleSettings = create((set) => ({
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
  setGlobal_Windows_Open: (Global_Windows_Open) => set({ Global_Windows_Open }),
  Global_Windows_Close: false,
  setGlobal_Windows_Close: (Global_Windows_Close) =>
    set({ Global_Windows_Close }),
  Mirror_Fold: false,
  setMirror_Fold: (Mirror_Fold) => set({ Mirror_Fold }),
}));
