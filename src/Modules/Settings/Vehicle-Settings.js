/* eslint-disable no-eval */
import React from "react";
import SettingsNav from "./Settings-Nav";
import "../Style.css";
import { FormControlLabel, FormGroup, Slider, Switch } from "@mui/material";
import { mediumSpeed } from "../../Stores/mediumSpeed";
// eslint-disable-next-line no-unused-vars
let vehicleStore = {};
function onChange(name) {
  window.ipcRenderer.send("action", {
    type: name,
    press: false,
  });
}
function VehicleSettings() {
  //const driverTempVar = mediumSpeed((state) => state.driver);
  let Drive_Away_Locking_5 = mediumSpeed((state) => state.Drive_Away_Locking_5);
  let Drive_Away_Locking_10 = mediumSpeed(
    (state) => state.Drive_Away_Locking_10
  );
  let Drive_Away_Locking_15 = mediumSpeed(
    (state) => state.Drive_Away_Locking_15
  );
  let Passive_Arming = mediumSpeed((state) => state.Passive_Arming);
  let AutoLock = mediumSpeed((state) => state.AutoLock);
  let Alarm_Sensors = mediumSpeed((state) => state.Alarm_Sensors);
  let Two_Stage_Locking = mediumSpeed((state) => state.Two_Stage_Locking);
  let Global_Windows_Open = mediumSpeed((state) => state.Global_Windows_Open);
  let Global_Windows_Close = mediumSpeed((state) => state.Global_Windows_Close);
  let Mirror_Fold = mediumSpeed((state) => state.Mirror_Fold);
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
  return (
    <div className="flex h-screen w-max absolute">
      <div className="flex h-10 w-full absolute">
        <SettingsNav />
      </div>
      <div className="h-screen w-full items-center justify-center p-10 flex-col flex">
        <p>There will be vehicle shizz here</p>

        {VehicleSettings.map((a) => {
          return (
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked={eval(a.handle)}
                    checked={eval(a.handle)}
                    onChange={onChange(a.handle)}
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
