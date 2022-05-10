import create from "zustand";

export let settings = create((set) => ({
  brightnessOffset: false,
  setBrightnessOffset: (brightnessOffset) => set({ brightnessOffset }),
  brightnessAuto: true,
  setBrightnessAuto: (brightnessAuto) => set({ brightnessAuto }),
}));
