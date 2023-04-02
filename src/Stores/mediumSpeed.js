import create from "zustand";
import produce from "immer";

export const time = create((set) => ({
  day: 0,
  setDay: (day) => set({ day }),
  month: 0,
  setMonth: (month) => set({ month }),
  year: 0,
  setYear: (year) => set({ year }),
  hour: 0,
  setHour: (hour) => set({ hour }),
  minute: 0,
  setMinute: (minute) => set({ minute }),
  second: 0,
  setSecond: (second) => set({ second }),
}));

export const temperature = create((set) => ({
  interior: 0,
  setInterior: (interior) => set({ interior }),
  exterior: 0,
  setExterior: (exterior) => set({ exterior }),
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
  speed: 0,
  setSpeed: (speed) => set({ speed }),
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

export const parking = create((set) => ({
  frontLeft: 0,
  setFrontLeft: (frontLeft) => set({ frontLeft }),
  frontLeftMiddle: 0,
  setFrontLeftMiddle: (frontLeftMiddle) => set({ frontLeftMiddle }),
  frontRightMiddle: 0,
  setFrontRightMiddle: (frontRightMiddle) => set({ frontRightMiddle }),
  frontRight: 0,
  setFrontRight: (frontRight) => set({ frontRight }),
  rearLeft: 0,
  setRearLeft: (rearLeft) => set({ rearLeft }),
  rearLeftMiddle: 0,
  setRearLeftMiddle: (rearLeftMiddle) => set({ rearLeftMiddle }),
  rearRightMiddle: 0,
  setRearRightMiddle: (rearRightMiddle) => set({ rearRightMiddle }),
  rearRight: 0,
  setRearRight: (rearRight) => set({ rearRight }),
  active: false,
  setActive: (active) => set({ active }),
}))
