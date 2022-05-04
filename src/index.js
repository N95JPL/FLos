import { createRoot } from "react-dom/client";
import React from "react";

import "./Modules/Style.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Modules/Layout";
import NoPage from "./Modules/NoPage";
import create from "zustand";
import Carplay from "./Modules/Carplay";
import Vehicle from "./Modules/Vehicle";
import Settings from "./Modules/Settings";
import Climate from "./Modules/Climate";

export let theme = create((set) => ({
  darkMode: false,
  setDarkMode: (darkMode) => set({ darkMode }),
  primaryColor: "blue",
  setPrimaryColor: (primaryColor) => set({ primaryColor }),
  secondaryColor: "red",
  setSecondaryColor: (secondaryColor) => set({ secondaryColor }),
}));

export let mediumSpeed = create((set) => ({
  time: {
    hour: 0,
    setHour: (hour) => set({ hour }),
    minute: 0,
    setMinute: (minute) => set({ minute }),
    second: 0,
    setSecond: (second) => set({ second }),
  },
  temperature: {
    driver: 0,
    setDriver: (driver) => set({ driver }),
    passenger: 0,
    setPassenger: (passenger) => set({ passenger }),
    interior: 0,
    setInterior: (interior) => set({ interior }),
  },
  indicators: {
    rearHeater: 0,
    setRearHeater: (rearHeater) => set({ rearHeater }),
    auto: 0,
    setAuto: (auto) => set({ auto }),
    defrost: 0,
    setDefrost: (defrost) => set({ defrost }),
    frontHeater: 0,
    setFrontHeater: (frontHeater) => set({ frontHeater }),
    recirc: 0,
    setRecirc: (recirc) => set({ recirc }),
  },
}));

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
          <Route path="/settings" element={<Settings />} />
          <Route path="/*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
const root = createRoot(document.getElementById("root"));
root.render(<App />);
