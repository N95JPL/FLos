import { createRoot } from "react-dom/client";
import React from "react";
import "./Modules/Style.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Modules/Layout";
import NoPage from "./Modules/NoPage";
import Carplay from "./Modules/Carplay";
import VehicleDashboard from "./Modules/Vehicle/Dashboard";
import Climate from "./Modules/Climate";
import VehicleSettings from "./Modules/Settings/Vehicle-Settings";
import AppSettings from "./Modules/Settings/App-Settings";
import Dev from "./Modules/Settings/Dev";
import { mediumSpeed } from "./Stores/mediumSpeed";
import { vehicleInfo } from "./Stores/vehicleInfo";


// eslint-disable-next-line no-unused-vars
let setMediumSpeed = "";
let setVehicleInfo = "";
// eslint-disable-next-line no-unused-vars
let setup = false;
export default function App() {
  // eslint-disable-next-line no-unused-vars
  if (!setup) {
    setUp();
    window.api.dataFull("vehicleInfo");
    window.api.dataFull("mediumSpeed");
  }
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Climate />} />
          <Route path="/vehicle/dashboard" element={<VehicleDashboard />} />
          <Route path="/settings/vehicle" element={<VehicleSettings />} />
          <Route path="/settings/app" element={<AppSettings />} />
          <Route path="/settings/dev" element={<Dev />} />
          <Route path="/*" element={<NoPage />} />
        </Route>
        <Route path="/carplay" element={<Carplay />} />
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
  const setSetupInfoLine = vehicleInfo((state) => state.setSetupInfoLine);
  const setFirstTimeSetup = vehicleInfo((state) => state.setFirstTimeSetup);
  const setVinDecode = vehicleInfo((state) => state.setVinDecode);
  const setEucdDecode = vehicleInfo((state) => state.setEucdDecode);
  const setSetupStep = vehicleInfo((state) => state.setSetupStep);
  const setSetupEUCDStep = vehicleInfo((state) => state.setSetupEUCDStep);
  const setCCFID = vehicleInfo((state) => state.setCCFID);
  const setAs_Built = vehicleInfo((state) => state.setAs_Built);
  const setVIN = vehicleInfo((state) => state.setVIN);
  const setModel_id = vehicleInfo((state) => state.setModel_id);
  const setModelYear = vehicleInfo((state) => state.setModelYear);
  const setModel = vehicleInfo((state) => state.setModel);
  const setModelName = vehicleInfo((state) => state.setModelName);
  const setBrand = vehicleInfo((state) => state.setBrand);
  const setMarket = vehicleInfo((state) => state.setMarket);
  const setBodyStyle = vehicleInfo((state) => state.setBodyStyle);
  const setTrim = vehicleInfo((state) => state.setTrim);
  const setEmission = vehicleInfo((state) => state.setEmission);
  const setPlant = vehicleInfo((state) => state.setPlant);
  const setDriver = vehicleInfo((state) => state.setDriver);
  const setTransmission = vehicleInfo((state) => state.setTransmission);
  const setEngine = vehicleInfo((state) => state.setEngine);
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
    console.log(msg);
    for (const x in msg) {
      const a = "set" + capitalize(x.toString());
      const b = a + "(msg." + x + ")";
      // eslint-disable-next-line no-eval
      eval(b);
    }
  });
  setMediumSpeed = mediumSpeed();
  window.api.onMediumSpeed((event, msg) => {
    for (const x in msg) {
      for (const y in msg[x]) {
        const a = "set" + capitalize(y.toString());
        const b = "setMediumSpeed." + x + "." + a + "(msg." + x + "." + y + ")";
        // eslint-disable-next-line no-eval
        eval(b);
      }
    }
  });
  setup = true;
}
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const root = createRoot(document.getElementById("root"));
root.render(<App />);
