/* eslint-disable no-unused-vars */
import VehicleNav from "./Vehicle-Nav";
import ReactSpeedometer from "react-d3-speedometer";
import "../Style.css";
import { theme } from "../../Stores/theme";
import { measurementStore } from "../../Stores/measurement";
import { mediumSpeed } from "../../Stores/mediumSpeed";

export function VehicleDashboard() {
  const primaryColor = theme((state) => state.primaryColor);
  const secondaryColor = theme((state) => state.secondaryColor);
  let textColor = theme((state) => state.textColor);
  const gear = mediumSpeed((state) => state.gear);

  var speed = "2";
  var minValue = "";
  var maxValue = "";
  var segments = "";
  var needleHeightRatio = "";
  var maxSegmentLabels = "";
  var labelFontSize = "";
  var valueTextFontSize = "";
  var measure = "";

  const measurementSystem = measurementStore(
    (state) => state.measurementSystem,
  );

  if (textColor === "Light Blue") {
    textColor = "lightblue";
  }

  if (measurementSystem === "Metric") {
    speed = Math.round(speed * 1 * 10) / 10;
    labelFontSize = "15";
    valueTextFontSize = "18";
    minValue = "0";
    maxValue = "120";
    segments = "120";
    maxSegmentLabels = "12";
    measure = " Mph";
  } else if (measurementSystem === "Imperial") {
    speed = Math.round(speed * 1.6 * 10) / 10;
    labelFontSize = "15";
    valueTextFontSize = "18";
    minValue = "0";
    maxValue = "200";
    segments = "200";
    maxSegmentLabels = "10";
    measure = " Kph";
  }

  const startColor = primaryColor || "lime";

  const onChange = (name) => {
    // Perform the desired action when the input value changes
    // window.ipcRenderer.send("settingsAction", {
    //   type: name,
    //   press: false,
    // });
  };

  return (
    <div className="absolute w-[90%] h-[100%] left-[5%] top-[15%]">
      <div className="h-55 w-full t-15">
        <VehicleNav />
      </div>
      <div className="fade-in h-[80%] w-[40%] flex justify-center items-center">
        <ReactSpeedometer
          value={speed}
          currentValueText={speed + measure}
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-4">
        <h2 className="text-2xl font-bold text-center">Gear: {gear}</h2>
      </div>
    </div>
  );
}

export default VehicleDashboard;
