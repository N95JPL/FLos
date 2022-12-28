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
  const voltage_graph = mediumSpeed((state) => state.voltage_graph);
  const charging_current_graph = mediumSpeed((state) => state.charging_current_graph);
  const alternator_graph = mediumSpeed((state) => state.alternator_graph);
  return (
    <div className="fade-in transition-all fixed h-full">
      <div className="h-[20%] w-full">
        <VehicleNav />
      </div>
      <div className="h-[80%] w-[87%] justify-center pl-10 pr-10 pb-5 text-center items-center fixed grid grid-rows-2 gap-4 grid-cols-3">
        <div className="row-span-1 col-span-1">
          <p className="text-xl">Battery Voltage</p>
          <GiCarBattery className={`w-full transition-all items-center justify-center text-8xl text-center ${voltage > 12.8 ? `text-green-600` : voltage > 11.9 ? `text-yellow-600` : `text-red-600`}`} />
          <p className="text-xl">{voltage}V</p>
        </div>
        <div className="row-span-1 col-span-1">
          <p className="text-xl">Charging Current</p>
          <GiBatteryPack className={`w-full transition-all items-center justify-center text-8xl text-center ${charging_current > 15 ? `text-green-600` : charging_current > 0 ? `text-yellow-600` : `text-red-600`}`} />
          <p className="text-xl">{charging_current}A</p>
        </div>
        <div className="row-span-1 col-span-1">
          <p className="text-xl">Alternator Current</p>
          <GiElectric className={`w-full transition-all items-center justify-center text-8xl text-center ${alternator > 160 ? `text-red-600` : alternator ? `text-yellow-600` : alternator > 0 ? `text-green-600` : `text-red-600`}`} />
          <p className="text-xl">{alternator}A</p>
        </div>
        <div className="row-span-1 col-span-1">
          <LineChart cwidth={400} height={400} data={voltage_graph}>
            <Line type="monotone" dataKey="voltage" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="row-span-1 col-span-1">
          <LineChart cwidth={400} height={400} data={charging_current_graph}>
            <Line type="monotone" dataKey="current" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="row-span-1 col-span-1">
          <LineChart cwidth={400} height={400} data={alternator_graph}>
            <Line type="monotone" dataKey="alternator" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}
export default VehicleElectrical;
