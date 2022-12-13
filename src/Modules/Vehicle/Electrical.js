/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
import React from "react";
import VehicleNav from "./Vehicle-Nav";
import "../Style.css";
import { FormControlLabel, FormGroup, Icon, Slider, Switch } from "@mui/material";
import { GiCarBattery } from "react-icons/gi";
import { mediumSpeed } from "../../Stores/mediumSpeed";
// eslint-disable-next-line no-unused-vars
let vehicleStore = {};
function onChange(name) {
  // window.ipcRenderer.send("settingsAction", {
  //   type: name,
  //   press: false,
  // });
}
function VehicleElectrical() {
  const voltage = mediumSpeed((state) => state.voltage);

  return (
    <div className="fade-in transition-all fixed h-full">
      <div className="h-[20%] w-full">
        <VehicleNav />
      </div>
      <div className="h-[80%] w-[87%] justify-center pl-10 pr-10 pb-5 text-center items-center fixed grid grid-rows-2 gap-4 grid-cols-3">
        <div className="row-span-1 col-span-1">
          <p className="text-xl">Battery Voltage</p>
          <GiCarBattery className={`w-full transition-all items-center justify-center text-8xl text-center ${voltage > 12.8 ? `text-green-600` : voltage > 11.9 ? `text-yellow-600` : `text-red-600`}`} />
          <p className="text-xl">{voltage}v</p>
        </div>
        <div className="row-span-1 col-span-1">
          <p className="text-base">Charging Current</p>
        </div>
        <div className="row-span-1 col-span-1">
          <p className="text-xl">Alternator Current</p>
        </div>
        <div className="row-span-1 col-span-1">
          <p className="text-xl">Battery Voltage</p>
        </div>
        <div className="row-span-1 col-span-1">
          <p className="text-xl">Charging Current</p>
        </div>
        <div className="row-span-1 col-span-1">
          <p className="text-xl">Alternator Current</p>
        </div>
      </div>
    </div>
  );
}
export default VehicleElectrical;
