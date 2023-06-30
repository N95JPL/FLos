import React from "react";
import VehicleNav from "./Vehicle-Nav";
import { FormControlLabel, FormGroup, Slider, Switch } from "@mui/material";
import ReactSpeedometer from "react-d3-speedometer";
import "../Style.css";
import { theme } from "../../Stores/theme";
import { measurementStore } from "../../Stores/measurement";
import { Link } from "react-router-dom";


// Currently Setting up metric system :() Line 16 is weird

function VehicleDashboard() {
  const primaryColor = theme((state) => state.primaryColor);
  const secondaryColor = theme((state) => state.secondaryColor);
  var textColor = theme((state) => state.textColor);

  var value = "";
  var minValue = "";
  var maxValue = "";
  var segments = "";
  var needleHeightRatio = "";
  var maxSegmentLabels = "";
  var labelFontSize = "";
  var valueTextFontSize = "";
  var measure = "";

  const measurementSystem = measurementStore((state) => state.measurementSystem);
  // MPH / KMH Conversions
  console.log(measurementSystem)

  if (textColor === "Light Blue") {
    textColor = "lightblue"
  }

  if (measurementSystem === "Metric") {
    value = "10" * 1.0;
    labelFontSize = "15";
    valueTextFontSize = "18";
    minValue = "0";
    maxValue = "120";
    segments = "120";
    maxSegmentLabels = "12";
    measure = " Mph";

    console.log(minValue, "+", maxValue);
  } else if (measurementSystem === "Imperial") {
    value = "10" * 1.6;
    labelFontSize = "15";
    valueTextFontSize = "18";
    minValue = "0";
    maxValue = "200";
    segments = "200";
    maxSegmentLabels = "10";
    measure = " Kph";



    console.log(minValue, "+", maxValue);
  }


  const startColor = primaryColor; // Use primaryColor as the start color, fallback to "lime" if undefined

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
        <ReactSpeedometer
          value={value}
          currentValueText={value + measure}
          labelFontSize={labelFontSize}
          valueTextFontSize={valueTextFontSize}
          minValue={minValue}
          maxValue={maxValue}
          segments={segments}
          textColor={textColor}
          needleHeightRatio={0.7}
          forceRender={true}
          needleColor={textColor}
          startColor={startColor}
          endColor={secondaryColor}
          maxSegmentLabels={maxSegmentLabels}
          ringWidth={50}
        />
      </div>
    </div>
  );
}

export default VehicleDashboard;
