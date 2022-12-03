import { createRoot } from "react-dom/client";
import React from "react";
import "./Modules/Style.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Modules/Layout";
import NoPage from "./Modules/NoPage";
import Carplay from "./Modules/Carplay";
import Vehicle from "./Modules/Vehicle";
import Climate from "./Modules/Climate";
import VehicleSettings from "./Modules/Settings/Vehicle-Settings";
import AppSettings from "./Modules/Settings/App-Settings";
import Dev from "./Modules/Settings/Dev";
import { mediumSpeed } from "./Stores/mediumSpeed";
import { vehicleInfo } from "./Stores/vehicleInfo"


// eslint-disable-next-line no-unused-vars
let setMediumSpeed = "";
let setVehicleInfo = "";
// eslint-disable-next-line no-unused-vars
let setup = false;
export default function App() {
  // eslint-disable-next-line no-unused-vars
  if (!setup) {
    setUp();
    window.api.dataFull("vehicleInfo")
    window.api.dataFull("mediumSpeed");
  }
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Climate />} />
          <Route path="/vehicle" element={<Vehicle />} />
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
  const setFirstTimeSetup = vehicleInfo((state) => state.setFirstTimeSetup);
  const setSetupStep = vehicleInfo((state) => state.setSetupStep);
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
