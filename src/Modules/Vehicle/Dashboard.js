/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
import React from "react";
import VehicleNav from "./Vehicle-Nav";
import "../Style.css";
import { FormControlLabel, FormGroup, Slider, Switch } from "@mui/material";
// import { mediumSpeed } from "../../Stores/mediumSpeed";
import ReactSpeedometer from "react-d3-speedometer";
// eslint-disable-next-line no-unused-vars
let vehicleStore = {};
function onChange(name) {
  // window.ipcRenderer.send("settingsAction", {
  //   type: name,
  //   press: false,
  // });
}
function VehicleDashboard() {
  //const driverTempVar = mediumSpeed((state) => state.driver);

  return (
    <div className="absolute w-[90%] h-[100%] left-[10%]">
      <div className="h-20 w-full">
        <VehicleNav />
      </div>
      <div
        id="outlet"
        className="fade-in h-[80%] top-[20%] w-full justify-center pl-10 pr-10 pb-5 text-center items-center fixed"
      >
        <div className="fixed h-full w-full justify-center text-center items-center">
          <ReactSpeedometer value={50} />
        </div>
      </div>
    </div>
  );
}
export default VehicleDashboard;
