import create from "zustand";
import { persist } from "zustand/middleware";

export let vehicleInfo = create(
	persist(
		(set) => ({
			setupInfoLine: "Welcome! First Time Setup Wizard",
			setSetupInfoLine: (setupInfoLine) => set({ setupInfoLine }),
			firstTimeSetup: true,
			setFirstTimeSetup: (firstTimeSetup) => set({ firstTimeSetup }),
			vinDecode: true,
			setVinDecode: (vinDecode) => set({ vinDecode }),
			eucdDecode: false,
			setEucdDecode: (eucdDecode) => set({ eucdDecode }),
			setupStep: 0,
			setSetupStep: (setupStep) => set({ setupStep }),
			setupEUCDStep: 0,
			setSetupEUCDStep: (setupEUCDStep) => set({ setupEUCDStep }),
			CCFID: "-",
			setCCFID: (CCFID) => set({ CCFID }),
			As_Built: "-",
			setAs_Built: (As_Built) => set({ As_Built }),
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
			name: "vehicleInfo",
		}
	)
);
