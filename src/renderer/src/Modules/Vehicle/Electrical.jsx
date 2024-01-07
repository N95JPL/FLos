/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
import React from "react";
import VehicleNav from "./Vehicle-Nav";
import "../Style.css";
import { FormControlLabel, FormGroup, Icon, Slider, Switch } from "@mui/material";
import { GiCarBattery, GiElectric, GiBatteryPack } from "react-icons/gi";
import { mediumSpeed } from "../../Stores/mediumSpeed";
import { LineChart, Line, XAxis, ResponsiveContainer, YAxis, ReferenceLine } from "recharts";
// eslint-disable-next-line no-unused-vars
let vehicleStore = {};
function onChange(name) {
	// window.ipcRenderer.send("settingsAction", {
	//   type: name,
	//   press: false,
	// });
}
export function VehicleElectrical() {
	const voltage = mediumSpeed((state) => state.voltage);
	const charging_current = mediumSpeed((state) => state.charging_current);
	const alternator = mediumSpeed((state) => state.alternator);
	// const charging_current_graph = [{ name: 1, charging_current: 0 }, { name: 2, charging_current: 10 }, { name: 3, charging_current: 20 }, { name: 4, charging_current: 30 }]
	return (
		<>
			<div className='absolute w-[90%] h-[80%] left-[10%]'>
				<div className='h-13 w-full'>
					<VehicleNav />
				</div>
				<div
					id='outlet'
					className='fade-in h-[320px] w-full justify-center text-center items-center grid grid-rows-2 gap-4 grid-cols-3'>
					<div className='row-span-1 col-span-1'>
						<p className='text-xl'>Battery Voltage</p>
						<GiCarBattery
							className={`w-full transition-all items-center justify-center text-8xl text-center ${
								voltage > 12.8
									? `text-green-600`
									: voltage > 11.6
										? `text-yellow-600`
										: `text-red-600`
							}`}
						/>
						<p className='text-xl'>{voltage}V</p>
					</div>
					<div className='row-span-1 col-span-1'>
						<p className='text-xl'>Charging Current</p>
						<GiBatteryPack
							className={`w-full transition-all items-center justify-center text-8xl text-center ${
								charging_current > 15
									? `text-green-600`
									: charging_current > 0
										? `text-yellow-600`
										: `text-red-600`
							}`}
						/>
						<p className='text-xl'>{charging_current}A</p>
					</div>
					<div className='row-span-1 col-span-1'>
						<p className='text-xl'>Alternator Current</p>
						<GiElectric
							className={`w-full transition-all items-center justify-center text-8xl text-center ${
								alternator > 160
									? `text-red-600`
									: alternator
										? `text-yellow-600`
										: alternator > 0
											? `text-green-600`
											: `text-red-600`
							}`}
						/>
						<p className='text-xl'>{alternator}A</p>
					</div>
					<div className='w-full h-full justify-center row-span-1 col-span-1'></div>
					<div className='w-full h-full justify-center row-span-1 col-span-1'></div>
					<div className='w-full h-full justify-center row-span-1 col-span-1'></div>
				</div>
			</div>
		</>
	);
}
export default VehicleElectrical;
