/* eslint-disable no-eval */
import React from "react";
import SettingsNav from "./Settings-Nav";
import "../Style.css";
import { FormControlLabel, FormGroup, Slider, Switch } from "@mui/material";
import { settings } from "../../Stores/settings";
// eslint-disable-next-line no-unused-vars
function VehicleSettings() {
  //const driverTempVar = mediumSpeed((state) => state.driver);

  return (
    <div className="flex h-screen w-max absolute">
      <div className="flex h-10 w-full absolute">
        <SettingsNav />
      </div>
      <div className="h-screen w-full items-center justify-center p-10 flex-col flex">
        <p>There will be vehicle shizz here</p>
      </div>
    </div>
  );
}
export default VehicleSettings;
