/* eslint-disable no-eval */
import React from "react";
import SettingsNav from "./Settings-Nav";

import "../Style.css";
import { FaCircle } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
function Dev() {
  const [HS, setHS] = React.useState(false);
  const [MS, setMS] = React.useState(false);
  return (
    <div className="flex h-screen w-[695px] justify-center absolute">
      <div className="flex top-10h-10 w-full absolute">
        <SettingsNav />
      </div>
      <div className="h-screen flex w-max items-center justify-evenly p-10">
        <div className="max-w-4xl w-full flex flex-col">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Debug Information
            </h1>
            <p className="text-sm mb-2.5">
              Only touch this if you know what you're doing! -Josh
            </p>
          </div>
          <div className="flex flex-col items-center gap-2.5 mt-2.5">
            <div className="flex gap-2.5">
              {!HS ?
                <button
                  className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
                  onClick={() => [
                    window.api.canRecorder("startHS"),
                    setHS(true)
                  ]}
                >
                  <FaCircle className="text-emerald-400" /> Start High Speed
                  Logging
                </button> :
                <button
                  className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
                  onClick={() => [
                    window.api.canRecorder("endHS"),
                    setHS(false)
                  ]}
                >
                  <FaCircle className="text-emerald-400" /> Stop High Speed
                  Logging
                </button>
              }
            </div>
            <div className="flex gap-2.5">
              {!MS ?
                <button
                  className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
                  onClick={() => [
                    window.api.canRecorder("startMS"),
                    setMS(true)
                  ]}
                >
                  <FaCircle className="text-yellow-400" /> Start Medium Speed
                  Logging
                </button> :
                <button
                  className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
                  onClick={() => [
                    window.api.canRecorder("endMS"),
                    setMS(false)
                  ]}
                >
                  <FaCircle className="text-yellow-400" /> Stop Medium Speed
                  Logging
                </button>
              }
            </div>
            <button
              className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
              onClick={() => window.api.close("")}
            >
              <FaCircle className="text-red-400" /> Close APP
            </button>
          </div>
        </div>
      </div>
    </div >
  );
}
export default Dev;
