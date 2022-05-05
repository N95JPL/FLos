/* eslint-disable no-eval */
import React from "react";
import SettingsNav from "./Settings-Nav";

import "../Style.css";
import { FaCircle } from "react-icons/fa";
import { theme } from "../../index";

let setTheme;
// eslint-disable-next-line no-unused-vars
function AppSettings() {
  setTheme = theme();
  const [showModal, setShowModal] = React.useState(false);
  const [colorPicker, setColorPicker] = React.useState("to");
  return (
    <div className="flex h-screen w-max absolute">
      <div className="transition flex top-10h-10 w-screen fixed">
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
              <button
                className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
                onClick={() =>
                  window.ipcRenderer.send("canRecorder", "startHS")
                }
              >
                <FaCircle className="text-emerald-400" /> Start High Speed
                Logging
              </button>
              <button
                className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
                onClick={() => window.ipcRenderer.send("canRecorder", "endHS")}
              >
                <FaCircle className="text-emerald-400" /> Stop High Speed
                Logging
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
                <FaCircle className="text-yellow-400" /> Stop Medium Speed
                Logging
              </button>
            </div>
            <button
              className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
              onClick={() => window.ipcRenderer.send("close", "")}
            >
              <FaCircle className="text-red-400" /> Close APP
            </button>
            <div className="flex gap-2.5">
              <button
                className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
                onClick={() => [setShowModal(!showModal), setColorPicker("to")]}
              >
                <FaCircle className="text-emerald-400" /> "To" Color
              </button>
              <button
                className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
                onClick={() => [
                  setShowModal(!showModal),
                  setColorPicker("from"),
                ]}
              >
                <FaCircle className="text-emerald-400" /> "From" Colour
              </button>
            </div>
          </div>
        </div>
        {showModal ? (
          <div className=" h-[120px] w-[600px] flex bg-white z-20 fixed left-36 top-40 self-center transition"></div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
export default AppSettings;
