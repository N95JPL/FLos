/* eslint-disable no-eval */
import React, { useEffect } from "react";
import SettingsNav from "./Settings-Nav";
import "tw-elements";
import "../Style.css";
import { FormControlLabel, FormGroup, Slider, Switch } from "@mui/material";
import { settings } from "../../Stores/settings";
// eslint-disable-next-line no-unused-vars
function VehicleSettings() {
  //const driverTempVar = mediumSpeed((state) => state.driver);
  const brightnessOffset = settings((state) => state.brightnessOffset);
  const setBrightnessOffset = settings((state) => state.setBrightnessOffset);
  const brightnessAuto = settings((state) => state.brightnessAuto);
  const setBrightnessAuto = settings((state) => state.setBrightnessAuto);

  const updateBrightnessOffset = (e, data) => {
    setBrightnessOffset(data);
  };
  const updateBrightnessAuto = (e, data) => {
    setBrightnessAuto(data);
  };
  useEffect(() => {
    window.ipcRenderer.send("action", {
      type: "brightness",
      auto: brightnessAuto,
      press: false,
      value: brightnessOffset,
    });
  }, [brightnessAuto, brightnessOffset]);
  return (
    <div className="flex h-screen w-max absolute">
      <div className="flex top-10h-10 w-full absolute">
        <SettingsNav />
      </div>
      <div className="h-screen flex w-max items-center justify-evenly p-10">
        <div className="max-w-4xl w-max flex flex-col">
          <p>Vehicle Settings not found!</p>
          <Slider
            aria-label="Brightness"
            value={brightnessOffset}
            onChange={updateBrightnessOffset}
            min={5}
            max={32.5}
            defaultValue={brightnessOffset}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked={brightnessAuto}
                  checked={brightnessAuto}
                  onChange={updateBrightnessAuto}
                />
              }
              label="Auto"
            />
          </FormGroup>
        </div>
      </div>
    </div>
  );
}
export default VehicleSettings;
