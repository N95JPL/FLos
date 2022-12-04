import create from "zustand";
import { persist } from 'zustand/middleware'

export let vehicleInfo = create(
  persist(
    (set) => ({
      firstTimeSetup: true,
      setFirstTimeSetup: (firstTimeSetup) => set({ firstTimeSetup }),
      setupStep: 0,
      setSetupStep: (setupStep) => set({ setupStep }),
      VIN: "-",
      setVIN: (VIN) => set({ VIN }),
      Model_id: "-",
      setModel_id: (Model_id) => set({ Model_id }),
      Brand: "-",
      setBrand: (Brand) => set({ Brand }),
      Model: "-",
      setModel: (Model) => set({ Model }),
      ModelName: "-",
      setModelName: (ModelName) => set({ ModelName }),
      Market: "-",
      setMarket: (Market) => set({ Market }),
      BodyStyle: "-",
      setBodyStyle: (BodyStyle) => set({ BodyStyle }),
      Trim: "-",
      setTrim: (Trim) => set({ Trim }),
      Emission: "-",
      setEmission: (Emission) => set({ Emission }),
      ModelYear: "-",
      setModelYear: (ModelYear) => set({ ModelYear }),
      Plant: "-",
      setPlant: (Plant) => set({ Plant }),
      Driver: "-",
      setDriver: (Driver) => set({ Driver }),
      Transmission: "-",
      setTransmission: (Transmission) => set({ Transmission }),
      Engine: "-",
      setEngine: (Engine) => set({ Engine }),
    }),
    {
      name: 'vehicleInfo'
    }
  )
);
