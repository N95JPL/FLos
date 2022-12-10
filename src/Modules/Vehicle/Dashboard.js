/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
import React from "react";
import VehicleNav from "./Vehicle-Nav";
import "../Style.css";
import { FormControlLabel, FormGroup, Slider, Switch } from "@mui/material";
import { mediumSpeed } from "../../Stores/mediumSpeed";
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
    <div className="fixed h-full">
      <div className="h-[20%] w-full">
        <VehicleNav />
      </div>
      <div className="h-[10%] w-full text-center justify-center flex">
        <p>
          Note: These are read-only - Please change on the original headunit
        </p>
        <p>This may change.. if I figure it out!</p>
      </div>
      <div className="h-[70%] w-full justify-center pl-10 pr-10 pb-5 text-center items-center fixed grid grid-rows-5 gap-4 grid-cols-2">

      </div>
    </div>
  );
}
export default VehicleDashboard;
