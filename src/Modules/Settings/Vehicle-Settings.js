/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
import React from "react";
import SettingsNav from "./Settings-Nav";
import "../Style.css";
import { FormControlLabel, FormGroup, Slider, Switch } from "@mui/material";
import { vehicleSettings } from "../../Stores/mediumSpeed";
// eslint-disable-next-line no-unused-vars
let vehicleStore = {};
function onChange(name) {
  // window.ipcRenderer.send("settingsAction", {
  //   type: name,
  //   press: false,
  // });
}
function VehicleSettings() {
  //const driverTempVar = vehicleSettings((state) => state.driver);
  let Drive_Away_Locking_5 = vehicleSettings((state) => state.Drive_Away_Locking_5);
  let Drive_Away_Locking_10 = vehicleSettings(
    (state) => state.Drive_Away_Locking_10
  );
  let Drive_Away_Locking_15 = vehicleSettings(
    (state) => state.Drive_Away_Locking_15
  );
  let Passive_Arming = vehicleSettings((state) => state.Passive_Arming);
  let AutoLock = vehicleSettings((state) => state.AutoLock);
  let Alarm_Sensors = vehicleSettings((state) => state.Alarm_Sensors);
  let Two_Stage_Locking = vehicleSettings((state) => state.Two_Stage_Locking);
  let Global_Windows_Open = vehicleSettings((state) => state.Global_Windows_Open);
  let Global_Windows_Close = vehicleSettings((state) => state.Global_Windows_Close);
  let Mirror_Fold = vehicleSettings((state) => state.Mirror_Fold);
  const VehicleSettings = [
    {
      handle: "Drive_Away_Locking_5",
    },
    {
      handle: "Drive_Away_Locking_10",
    },
    {
      handle: "Drive_Away_Locking_15",
    },
    {
      handle: "Passive_Arming",
    },
    {
      handle: "AutoLock",
    },
    {
      handle: "Alarm_Sensors",
    },
    {
      handle: "Two_Stage_Locking",
    },
    {
      handle: "Global_Windows_Open",
    },
    {
      handle: "Global_Windows_Close",
    },
    {
      handle: "Mirror_Fold",
    },
  ];
  var parseFunc = function (x, y) {
    return x.y;
  };
  return (
    <div className="fixed h-full w-full">
      <div className="flex h-20 w-full">
        <SettingsNav />
      </div>
      <div className="fade-in h-[10%] w-full text-center justify-center flex">
        <p>
          Note: These are read-only - Please change on the original headunit
        </p>
        <p>This may change.. if I figure it out!</p>
      </div>
      <div className="h-[70%] w-full justify-center pl-10 pr-10 pb-5 text-center items-center fixed grid grid-rows-5 gap-4 grid-cols-2">
        {VehicleSettings.map((a) => {
          return (
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked={eval(a.handle)}
                    checked={eval(a.handle)}
                  // onChange={onChange(a.handle)}
                  />
                }
                label={a.handle
                  .replace("_", " ")
                  .replace("_", " ")
                  .replace("_", " ")}
              />
            </FormGroup>
          );
        })}
      </div>
    </div>
  );
}
export default VehicleSettings;
