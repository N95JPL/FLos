// measurement.js
import create from 'zustand'
import { persist } from 'zustand/middleware'

export const measurementStore = create(
  persist(
    (set) => ({
      measurementSystem: 'Metric',
      setMeasurementSystem: (system) => set({ measurementSystem: system })
    }),
    {
      name: 'measurement'
    }
  )
)
