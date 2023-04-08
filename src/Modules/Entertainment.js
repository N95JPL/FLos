import React from "react";
import "./Style.css";
import { theme } from "../Stores/theme";
import { temperature } from "../Stores/mediumSpeed";
import { entertainmentBus } from "../Stores/entertainmentBus";
import { FaFire, FaSnowman } from "react-icons/fa";

function Entertainment() {
  const primaryColor = theme((state) => state.primaryColor);
  const primaryColorSet = " from-" + primaryColor + "-600";
  const secondaryColor = theme((state) => state.secondaryColor);
  const secondaryColorSet = "to-" + secondaryColor + "-600";

  const sourceSel = entertainmentBus((state) => state.sourceSel);

  const interiorTempVar = temperature((state) => state.interior);
  const exteriorTempVar = temperature((state) => state.exterior);

  return (
    <>
      <div id="outlet" className="flex h-[100%] w-[90%] left-[10%] fade-in px-5 py-5 transition-all">
        {sourceSel == "Radio" ? <Radio /> : sourceSel == "Bluetooth" ? <Bluetooth /> : sourceSel == "Aux" ? <Aux /> : <Unknown />}
        <div className="fixed bottom-0 left-[10%] justify-center text-center w-[90%] h-[10%]">
          <div className="h-[100%] grid grid-cols-2 justify-center text-center bg-gradient-to-br from-gray-600 to-gray-800 bg-opacity-40 text-white">
            <div className="h-[100%] w-[100%] grid justify-center text-center items-center text-lg">Interior - {interiorTempVar}°C</div>
            <div className="h-[100%] w-[100%] grid justify-center text-center items-center text-lg">Exterior - {exteriorTempVar}°C</div>
          </div>
        </div>
      </div>
    </>
  )
}

function Radio() {
  const fmStation = entertainmentBus((state) => state.fmStation);
  const dabStation = entertainmentBus((state) => state.dabStation);
  const source = entertainmentBus((state) => state.source);
  const text = entertainmentBus((state) => state.text);
  const block = entertainmentBus((state) => state.block);
  const active = entertainmentBus((state) => state.active);

  const menuItems = [
    {
      name: "FM",
    },
    {
      name: "FM-AST",
    },
    {
      name: "DAB1",
    },
    {
      name: "DAB2",
    },
    {
      name: "AM",
    },
    {
      name: "AM-AST",
    },
  ];

  return (
    <>
      <div className="flex absolute grid-cols-6 w-[90%] h-[15%] left-[10%] top-0 justify-evenly text-center items-center">
        {/* Radio Source */}
        {menuItems.map((m) => {
          let x = source;
          let y = m.name;
          return (
            <div
              className={`${x === y
                ? "text-blue-500 text-3xl"
                : "text-white text-2xl opacity-50"} h-max`}
            >
              {m.name}
            </div>
          );
        })}
      </div>
      <div className="absolute grid grid-rows-2 justify-center w-[90%] top-[15%] h-[30%] left-[10%] text-center">
        <div className="grid justify-evenly w-[100%] text-center text-xl">
          {/* Radio Station */}
          <p>{source == "DAB1" || source == "DAB2" ? dabStation : source == "FM" || source == "FM-AST" ? fmStation : "??"}</p>
        </div>
        <div className="grid justify-evenly w-[100%] text-center text-xl">
          {/* Radio Text */}
          <p>{text}</p>
        </div>
      </div >
    </>
  );
}

function Bluetooth() {

  return (
    <>
      <div className="grid grid-rows-2 justify-evenly h-full w-full text-center">
        <div className="grid grid-cols-1 justify-evenly h-full w-full text-center">
          {/* Bluetooth Station */}
          <p>Bluetooth</p>
        </div>
        <div className="grid grid-cols-1 justify-evenly h-full w-full text-center">
          {/* Bluetooth Text */}
          <p>Figure this out</p>
        </div>
      </div>
    </>
  );
}

function Aux() {

  return (
    <>
      <div className="grid grid-rows-2 justify-evenly h-full w-full text-center">
        <div className="grid grid-cols-1 justify-evenly h-full w-full text-center">
          {/* Aux Station */}
          <p>Aux</p>
        </div>
        <div className="grid grid-cols-1 justify-evenly h-full w-full text-center">
          {/* Aux Text */}
          <p>Guess there ain't much to show here!</p>
        </div>
      </div>
    </>
  );
}

function Unknown() {
  const sourceSel = entertainmentBus((state) => state.sourceSel);
  return (
    <>
      <div className="grid grid-rows-2 justify-evenly h-full w-full text-center">
        <div className="grid grid-cols-1 justify-evenly h-full w-full text-center">
          {/* Unknown */}
          <p>Beep Boop - We got a problem!</p>
        </div>
        <div className="grid grid-cols-1 justify-evenly h-full w-full text-center">
          {/* Unknown Text */}
          <p>Something hasn't added up here...</p>
          <p>{sourceSel}</p>
        </div>
      </div>
    </>
  );
}
export default Entertainment;
