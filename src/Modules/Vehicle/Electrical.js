/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
import React from "react";
import VehicleNav from "./Vehicle-Nav";
import "../Style.css";
import { FormControlLabel, FormGroup, Icon, Slider, Switch } from "@mui/material";
import { GiCarBattery, GiElectric, GiBatteryPack } from "react-icons/gi";
import { mediumSpeed } from "../../Stores/mediumSpeed";
import { LineChart, Line } from 'recharts';
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
  const charging_current = mediumSpeed((state) => state.charging_current);
  const alternator = mediumSpeed((state) => state.alternator);
  return (
    <div className="fade-in transition-all fixed h-full">
      <div className="h-[20%] w-full">
        <VehicleNav />
      </div>
      <div className="h-[80%] w-[87%] justify-center pl-10 pr-10 pb-5 text-center items-center fixed grid grid-rows-2 gap-4 grid-cols-3">
        <div className="row-span-1 col-span-1">
          <p className="text-xl">Battery Voltage</p>
          <GiCarBattery className={`w-full transition-all items-center justify-center text-8xl text-center ${voltage[voltage.length - 1].voltage > 12.8 ? `text-green-600` : voltage[voltage.length - 1].voltage > 11.9 ? `text-yellow-600` : `text-red-600`}`} />
          <p className="text-xl">{voltage[voltage.length - 1].voltage}V</p>
        </div>
        <div className="row-span-1 col-span-1">
          <p className="text-xl">Charging Current</p>
          <GiBatteryPack className={`w-full transition-all items-center justify-center text-8xl text-center ${charging_current[charging_current.length - 1].charging > 15 ? `text-green-600` : charging_current[charging_current.length - 1].charging > 0 ? `text-yellow-600` : `text-red-600`}`} />
          <p className="text-xl">{charging_current[charging_current.length - 1].charging}A</p>
        </div>
        <div className="row-span-1 col-span-1">
          <p className="text-xl">Alternator Current</p>
          <GiElectric className={`w-full transition-all items-center justify-center text-8xl text-center ${alternator[alternator.length - 1].alternator > 160 ? `text-red-600` : alternator[alternator.length - 1].alternator > 140 ? `text-yellow-600` : alternator[alternator.length - 1].alternator > 0 ? `text-green-600` : `text-red-600`}`} />
          <p className="text-xl">{alternator[alternator.length - 1].alternator}A</p>
        </div>
        <div className="row-span-1 col-span-1">
          <LineChart cwidth={400} height={400} data={voltage}>
            <Line type="monotone" dataKey="voltage" stroke="#8884d8" />
          </LineChart>
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
