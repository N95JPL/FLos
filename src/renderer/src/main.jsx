/* eslint-disable no-unused-vars */
// eslint-disable no-unused-vars
import { createRoot } from "react-dom/client";
import React, { useEffect } from "react";
import "./Modules/Style.css";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "./Modules/Layout";
import { Home } from "./Modules/Home";
import { NoPage } from "./Modules/NoPage";
import { Carplay } from "./Modules/Carplay";
import { VehicleDashboard } from "./Modules/Vehicle/Dashboard";
import { VehicleElectrical } from "./Modules/Vehicle/Electrical";
import { AppSettings } from "./Modules/Settings/App-Settings";
import { Dev } from "./Modules/Settings/Dev";
import { mediumSpeed } from "./Stores/mediumSpeed";
import { vehicleInfo } from "./Stores/vehicleInfo";
import { entertainmentBus } from "./Stores/entertainmentBus";
import { Entertainment } from "./Modules/Entertainment";

// eslint-disable-next-line no-unused-vars
let setup = false;

export default function App() {
	// eslint-disable-next-line no-unused-vars
	if (!setup) {
		setUp();
		window.api.dataFull("vehicleInfo");
		window.api.dataFull("mediumSpeed");
	}
	var lastPage = "";
	var lastGear = "";

	return (
		<HashRouter>
			<Routes>
				<Route
					path='/'
					element={<Layout />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='/entertainment'
						element={<Entertainment />}
					/>
					<Route
						path='/vehicle/dashboard'
						element={<VehicleDashboard />}
					/>
					<Route
						path='/vehicle/electrical'
						element={<VehicleElectrical />}
					/>
					<Route
						path='/settings/app'
						element={<AppSettings />}
					/>
					<Route
						path='/settings/dev'
						element={<Dev />}
					/>
					<Route
						path='/*'
						element={<NoPage />}
					/>
					<Route
						path='/carplay'
						element={<Carplay />}
					/>
				</Route>
			</Routes>
		</HashRouter>
	);
}
function setUp() {
	const setupInfoLine = vehicleInfo((state) => state.setupInfoLine);
	const firstTimeSetup = vehicleInfo((state) => state.firstTimeSetup);
	const vinDecode = vehicleInfo((state) => state.vinDecode);
	const eucdDecode = vehicleInfo((state) => state.eucdDecode);
	const setupStep = vehicleInfo((state) => state.setupStep);
	const setupEUCDStep = vehicleInfo((state) => state.setupEUCDStep);
	const CCFID = vehicleInfo((state) => state.CCFID);
	const As_Built = vehicleInfo((state) => state.As_Built);
	const VIN = vehicleInfo((state) => state.VIN);
	const Model_id = vehicleInfo((state) => state.Model_id);
	const Brand = vehicleInfo((state) => state.Brand);
	const Model = vehicleInfo((state) => state.Model);
	const ModelName = vehicleInfo((state) => state.ModelName);
	const Market = vehicleInfo((state) => state.Market);
	const BodyStyle = vehicleInfo((state) => state.BodyStyle);
	const Trim = vehicleInfo((state) => state.Trim);
	const Emission = vehicleInfo((state) => state.Emission);
	const ModelYear = vehicleInfo((state) => state.ModelYear);
	const Plant = vehicleInfo((state) => state.Plant);
	const Driver = vehicleInfo((state) => state.Driver);
	const Transmission = vehicleInfo((state) => state.Transmission);
	const Engine = vehicleInfo((state) => state.Engine);

	window.api.vehicleInfo({
		firstTimeSetup: firstTimeSetup,
		CCFID: CCFID,
		VIN: VIN,
		Model_id: Model_id,
		Brand: Brand,
		Model: Model,
		ModelName: ModelName,
		Market: Market,
		BodyStyle: BodyStyle,
		Trim: Trim,
		Emission: Emission,
		ModelYear: ModelYear,
		Plant: Plant,
		Driver: Driver,
		Transmission: Transmission,
		Engine: Engine,
	});
	window.api.onVehicleInfo((event, msg) => {
		for (const key in msg) {
			updateVehicleInfoStore(key, msg[key]);
		}
	});

	window.api.onMediumSpeed((event, msg) => {
		for (const key in msg) {
			updateMediumSpeedStore(key, msg[key]);
		}
	});

	window.api.onEntertainmentBus((event, msg) => {
		for (const key in msg) {
			updateEntertainmentBusStore(key, msg[key]);
		}
	});

	setup = true;
}
function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

const updateEntertainmentBusStore = (key, value) => {
	const store = entertainmentBus.getState();

	switch (key) {
		case "mediaPhoneName":
			store.setMediaPhoneName(value);
			break;
		case "trackName":
			store.setTrackName(value);
			break;
		case "artistName":
			store.setArtistName(value);
			break;
		case "source":
			store.setSource(value);
			break;
		case "sourceSel":
			store.setSourceSel(value);
			break;
		case "fmStation":
			store.setFmStation(value);
			break;
		case "dabStation":
			store.setDabStation(value);
			break;
		case "text":
			store.setText(value);
			break;
		case "block":
			store.setBlock(value);
			break;
		case "active":
			store.setActive(value);
			break;
		case "volume":
			store.setVolume(value);
			break;
		case "volumeControl":
			store.setVolumeControl(value);
			break;
		case "volumeChange":
			store.setVolumeChange(value);
			break;
		default:
		// console.log(`Error: Unknown key for entertainmentBus: ${key}`);
	}
};
const updateMediumSpeedStore = (key, value) => {
	const store = mediumSpeed.getState();
	// console.log(value);
	switch (key) {
		case "day":
			store.setDay(value);
			break;
		case "month":
			store.setMonth(value);
			break;
		case "year":
			store.setYear(value);
			break;
		case "hour":
			store.setHour(value);
			break;
		case "minute":
			store.setMinute(value);
			break;
		case "second":
			store.setSecond(value);
			break;
		case "interior":
			store.setInterior(value);
			break;
		case "exterior":
			store.setExterior(value);
			break;
		case "coolant":
			store.setCoolant(value);
			break;
		case "brightness":
			store.setBrightness(value);
			break;
		case "offset":
			store.setOffset(value);
			break;
		case "auto":
			store.setAuto(value);
			break;
		case "adjustedBrightness":
			store.setAdjustedBrightness(value);
			break;
		case "speed":
			store.setSpeed(value);
			break;
		case "fuel":
			store.setFuel(value);
			break;
		case "gear":
			store.setGear(value);
			break;
		case "alternator":
			store.setAlternator(value);
			break;
		case "voltage":
			store.setVoltage(value);
			break;
		case "charging_current":
			store.setCharging_current(value);
			break;
		case "frontLeft":
			store.setFrontLeft(value);
			break;
		case "frontLeftMiddle":
			store.setFrontLeftMiddle(value);
			break;
		case "frontRightMiddle":
			store.setFrontRightMiddle(value);
			break;
		case "frontRight":
			store.setFrontRight(value);
			break;
		case "rearLeft":
			store.setRearLeft(value);
			break;
		case "rearLeftMiddle":
			store.setRearLeftMiddle(value);
			break;
		case "rearRightMiddle":
			store.setRearRightMiddle(value);
			break;
		case "rearRight":
			store.setRearRight(value);
			break;
		case "active":
			store.setActive(value);
			break;
		default:
		// console.log(`Error: Unknown key for mediumSpeed: ${key}`);
	}
};

const updateVehicleInfoStore = (key, value) => {
	const store = vehicleInfo.getState();
	// console.log(key);
	switch (key) {
		case "setupInfoLine":
			store.setSetupInfoLine(value);
			break;
		case "firstTimeSetup":
			store.setFirstTimeSetup(value);
			break;
		case "vinDecode":
			store.setVinDecode(value);
			break;
		case "eucdDecode":
			store.setEucdDecode(value);
			break;
		case "setupStep":
			store.setSetupStep(value);
			break;
		case "setupEUCDStep":
			store.setSetupEUCDStep(value);
			break;
		case "CCFID":
			store.setCCFID(value);
			break;
		case "As_Built":
			store.setAs_Built(value);
			break;
		case "VIN":
			store.setVIN(value);
			break;
		case "Model_id":
			store.setModel_id(value);
			break;
		case "Brand":
			store.setBrand(value);
			break;
		case "Model":
			store.setModel(value);
			break;
		case "ModelName":
			store.setModelName(value);
			break;
		case "Market":
			store.setMarket(value);
			break;
		case "BodyStyle":
			store.setBodyStyle(value);
			break;
		case "Trim":
			store.setTrim(value);
			break;
		case "Emission":
			store.setEmission(value);
			break;
		case "ModelYear":
			store.setModelYear(value);
			break;
		case "Plant":
			store.setPlant(value);
			break;
		case "Driver":
			store.setDriver(value);
			break;
		case "Transmission":
			store.setTransmission(value);
			break;
		case "Engine":
			store.setEngine(value);
			break;
		default:
		// console.log(`Error: Unknown key for vehicleInfo: ${key}`);
	}
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
