import React from "react";
import { FaCircle } from "react-icons/fa";
import { theme } from "../index";
// I dont know if this helps, but app-outlet is defiend in CSS
let setTheme;

function Vehicle() {
  setTheme = theme();
  return (
    <div className="h-screen flex items-center justify-center p-10">
      <div className="max-w-4xl w-full flex flex-col">
        <div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Debug Information
            </h1>
            <p className="text-sm mb-2.5">
              Only touch this if you know what you're doing! -Josh
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 mt-2.5">
          <div className="flex gap-2.5">
            <button
              className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
              onClick={() => window.ipcRenderer.send("canRecorder", "startHS")}
            >
              <FaCircle className="text-emerald-400" /> Start High Speed Logging
            </button>
            <button
              className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
              onClick={() => window.ipcRenderer.send("canRecorder", "endHS")}
            >
              <FaCircle className="text-emerald-400" /> Stop High Speed Logging
            </button>
          </div>
          <div className="flex gap-2.5">
            <button
              className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
              onClick={() => setTheme.setSecondaryColor("green")}
              // window.ipcRenderer.send("canRecorder", "startMS")
            >
              <FaCircle className="text-yellow-400" /> Start Medium Speed
              Logging
            </button>
            <button
              className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
              onClick={() => setTheme.setSecondaryColor("pink")}
              // window.ipcRenderer.send("canRecorder", "endMS")
            >
              <FaCircle className="text-yellow-400" /> Stop Medium Speed Logging
            </button>
          </div>
        </div>
        <div className="mt-2.5">
          <button
            className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
            onClick={() => window.ipcRenderer.send("close", "")}
          >
            <FaCircle className="text-red-400" /> Close APP
          </button>
        </div>
      </div>
    </div>
  );
}
export default Vehicle;
