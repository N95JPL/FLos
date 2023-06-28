import React from "react";
import VehicleNav from "./Vehicle-Nav";
import { FormControlLabel, FormGroup, Slider, Switch } from "@mui/material";
import ReactSpeedometer from "react-d3-speedometer";
import "../Style.css";

function VehicleDashboard() {
  const onChange = (name) => {
    // Perform the desired action when the input value changes
    // window.ipcRenderer.send("settingsAction", {
    //   type: name,
    //   press: false,
    // });
  };

  return (
    <div className="absolute w-[90%] h-[100%] left-[10%] top-[15%]">
      <div className="h-55 w-full t-15">
        <VehicleNav />
      </div>
      <div className="fade-in h-[80%] w-[50%] flex justify-center items-center">
        <ReactSpeedometer value={50} />
      </div>
    </div>
  );
}

export default VehicleDashboard;
