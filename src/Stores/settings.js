import create from "zustand";

export let settings = create((set) => ({
  brightnessOffset: 25,
  setBrightnessOffset: (brightnessOffset) => set({ brightnessOffset }),
  brightnessAuto: true,
  setBrightnessAuto: (brightnessAuto) => set({ brightnessAuto }),
}));
