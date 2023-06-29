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
      <ReactSpeedometer
         value={69}
         labelFontSize="15"
         valueTextFontSize="20"
         minValue={0} 
         maxValue={150} 
         segments={15}
         textColor={"lightblue"}
         needleHeightRatio={0.7}
         forceRender={true}
         needleColor="steelblue"
         customSegmentLabels={[
          { text: "0", position: "OUTSIDE", color: "rgb(255, 0, 0)" }, // Red
          { text: "10", position: "OUTSIDE", color: "rgb(230, 26, 26)" }, // Darker red
          { text: "20", position: "OUTSIDE", color: "rgb(204, 51, 51)" }, // Dark red
          { text: "30", position: "OUTSIDE", color: "rgb(179, 77, 77)" }, // Slightly lighter red
          { text: "40", position: "OUTSIDE", color: "rgb(153, 102, 102)" }, // Medium red
          { text: "50", position: "OUTSIDE", color: "rgb(128, 128, 128)" }, // Gray
          { text: "60", position: "OUTSIDE", color: "rgb(102, 153, 153)" }, // Medium blue-gray
          { text: "70", position: "OUTSIDE", color: "rgb(77, 179, 179)" }, // Slightly lighter blue-gray
          { text: "80", position: "OUTSIDE", color: "rgb(51, 204, 204)" }, // Light blue-gray
          { text: "90", position: "OUTSIDE", color: "rgb(26, 230, 230)" }, // Lighter blue-gray
          { text: "100", position: "OUTSIDE", color: "rgb(0, 255, 255)" }, // Cyan
          { text: "110", position: "OUTSIDE", color: "rgb(26, 230, 230)" }, // Lighter blue-gray
          { text: "120", position: "OUTSIDE", color: "rgb(51, 204, 204)" }, // Light blue-gray
          { text: "130", position: "OUTSIDE", color: "rgb(77, 179, 179)" }, // Slightly lighter blue-gray
          { text: "140", position: "OUTSIDE", color: "rgb(51, 179, 179)" } // Medium blue-gray
        ]}        
        segmentColors={[
          "rgb(255, 0, 0)", "rgb(230, 26, 26)", "rgb(204, 51, 51)", "rgb(179, 77, 77)", "rgb(153, 102, 102)",
          "rgb(128, 128, 128)", "rgb(102, 153, 153)", "rgb(77, 179, 179)", "rgb(51, 204, 204)", "rgb(26, 230, 230)",
          "rgb(0, 255, 255)", "rgb(26, 230, 230)", "rgb(51, 204, 204)", "rgb(77, 179, 179)", "rgb(51, 179, 179)"
        ]}       
        />
      </div>
    </div>
  );
}

export default VehicleDashboard;
