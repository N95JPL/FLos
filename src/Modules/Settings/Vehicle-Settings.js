/* eslint-disable no-eval */
import React from "react";
import SettingsNav from "./Settings-Nav";
import 'tw-elements';

import "../Style.css";
// eslint-disable-next-line no-unused-vars
function VehicleSettings() {
  return (
    <div className="flex h-screen w-max absolute">
      <div className="flex top-10h-10 w-full absolute">
        <SettingsNav />
      </div>
      <div className="h-screen flex w-max items-center justify-evenly p-10">
        <div className="max-w-4xl w-full flex flex-col">
          <p>Vehicle Settings not found!</p>
          <input
            onTouchEnd=""
            type="range"
            class="
      form-range
      appearance-none
      w-full
      h-6
      p-0
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none
    "
            id="brightness"
            min="0"
            max="20"
          />
          <div class="form-check form-switch">
            <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
            <label class="form-check-label inline-block text-gray-800" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VehicleSettings;
