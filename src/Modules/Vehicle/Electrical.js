/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
import React from "react";
import VehicleNav from "./Vehicle-Nav";
import "../Style.css";
import {
  FormControlLabel,
  FormGroup,
  Icon,
  Slider,
  Switch,
} from "@mui/material";
import { GiCarBattery, GiElectric, GiBatteryPack } from "react-icons/gi";
import { vehicle } from "../../Stores/mediumSpeed";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  YAxis,
  ReferenceLine,
} from "recharts";
// eslint-disable-next-line no-unused-vars
let vehicleStore = {};
function onChange(name) {
  // window.ipcRenderer.send("settingsAction", {
  //   type: name,
  //   press: false,
  // });
}
function VehicleElectrical() {
  const voltage = vehicle((state) => state.voltage);
  const charging_current = vehicle((state) => state.charging_current);
  const alternator = vehicle((state) => state.alternator);
  const voltage_graph = vehicle((state) => state.voltage_graph);
  const charging_current_graph = vehicle(
    (state) => state.charging_current_graph
  );
  const alternator_graph = vehicle((state) => state.alternator_graph);
  // const charging_current_graph = [{ name: 1, charging_current: 0 }, { name: 2, charging_current: 10 }, { name: 3, charging_current: 20 }, { name: 4, charging_current: 30 }]
  return (
    <>
      <div className="absolute w-[90%] h-[100%] left-[10%]">
        <div className="h-20 w-full">
          <VehicleNav />
        </div>
        <div
          id="outlet"
          className="fade-in h-[380px] w-full justify-center text-center items-center grid grid-rows-2 gap-4 grid-cols-3"
        >
          <div className="row-span-1 col-span-1">
            <p className="text-xl">Battery Voltage</p>
            <GiCarBattery
              className={`w-full transition-all items-center justify-center text-8xl text-center ${voltage > 12.8
                  ? `text-green-600`
                  : voltage > 11.6
                    ? `text-yellow-600`
                    : `text-red-600`
                }`}
            />
            <p className="text-xl">{voltage}V</p>
          </div>
          <div className="row-span-1 col-span-1">
            <p className="text-xl">Charging Current</p>
            <GiBatteryPack
              className={`w-full transition-all items-center justify-center text-8xl text-center ${charging_current > 15
                  ? `text-green-600`
                  : charging_current > 0
                    ? `text-yellow-600`
                    : `text-red-600`
                }`}
            />
            <p className="text-xl">{charging_current}A</p>
          </div>
          <div className="row-span-1 col-span-1">
            <p className="text-xl">Alternator Current</p>
            <GiElectric
              className={`w-full transition-all items-center justify-center text-8xl text-center ${alternator > 160
                  ? `text-red-600`
                  : alternator
                    ? `text-yellow-600`
                    : alternator > 0
                      ? `text-green-600`
                      : `text-red-600`
                }`}
            />
            <p className="text-xl">{alternator}A</p>
          </div>
          <div className="w-full h-full justify-center row-span-1 col-span-1">
            <ResponsiveContainer width="90%" height="90%">
              <LineChart data={voltage_graph} margin={{ top: 5, bottom: 5 }}>
                <Line
                  type="monotone"
                  dot={false}
                  dataKey="value"
                  stroke="#FFFFFF"
                />
                <XAxis
                  dataKey="name"
                  type="number"
                  domain={[Date.now() - 30000, Date.now()]}
                />
                <ReferenceLine y={12.8} stroke="green" strokeDasharray="3 3" />
                <ReferenceLine y={11.6} stroke="red" strokeDasharray="3 3" />
                <YAxis
                  allowDataOverflow={true}
                  ticks={[10, 12.5, 15]}
                  type="number"
                  domain={[10, 15]}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full h-full justify-center row-span-1 col-span-1">
            <ResponsiveContainer width="90%" height="90%">
              <LineChart
                data={charging_current_graph}
                margin={{ top: 5, bottom: 5 }}
              >
                <Line
                  type="monotone"
                  dot={false}
                  dataKey="charging_current"
                  stroke="#FFFFFF"
                />
                <XAxis
                  dataKey="name"
                  type="number"
                  domain={[Date.now() - 60000, Date.now()]}
                />
                <YAxis type="number" domain={["dataMin-2", "dataMax+2"]} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="w-full h-full justify-center row-span-1 col-span-1">
            <ResponsiveContainer width="90%" height="90%">
              <LineChart data={alternator_graph} margin={{ top: 5, bottom: 5 }}>
                <Line
                  type="monotone"
                  dot={false}
                  dataKey="alternator"
                  stroke="#FFFFFF"
                />
                <XAxis
                  dataKey="name"
                  type="number"
                  domain={[Date.now() - 60000, Date.now()]}
                />
                <YAxis type="number" domain={["dataMin-2", "dataMax+2"]} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
export default VehicleElectrical;
