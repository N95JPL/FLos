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

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// eslint-disable-next-line no-unused-vars
let setMediumSpeed = "";
// eslint-disable-next-line no-unused-vars
let setup = false;
function setUp() {
  setMediumSpeed = mediumSpeed();
  window.ipcRenderer.on("mediumSpeed", (event, msg) => {
    console.log(msg);
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
export default function App() {
  // eslint-disable-next-line no-unused-vars
  if (!setup) {
    setUp();
    window.ipcRenderer.send("mediumDataFULL", "");
  }
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Climate />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/carplay" element={<Carplay />} />
          <Route path="/settings/vehicle" element={<VehicleSettings />} />
          <Route path="/settings/app" element={<AppSettings />} />
          <Route path="/settings/dev" element={<Dev />} />
          <Route path="/*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(<App />);
