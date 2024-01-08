import create from "zustand";
import { persist } from "zustand/middleware";

export let settings = create(
  persist(
    (set) => ({
      brightnessOffset: 25,
      setBrightnessOffset: (brightnessOffset) => set({ brightnessOffset }),
      brightnessAuto: true,
      setBrightnessAuto: (brightnessAuto) => set({ brightnessAuto }),
      measurementSystem: "Metric", // Add the measurementSystem field
      setMeasurementSystem: (measurementSystem) => set({ measurementSystem }), // Add the setter function
    }),
    {
      name: "settings",
    },
  ),
);
