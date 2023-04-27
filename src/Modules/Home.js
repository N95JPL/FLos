import React, { useState } from "react";
import "./Style.css";
import { theme } from "../Stores/theme";
import { temperature } from "../Stores/mediumSpeed";
import { entertainmentBus } from "../Stores/entertainmentBus";
import { FaFire, FaSnowman } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const primaryColor = theme((state) => state.primaryColor);
  const primaryColorSet = " from-" + primaryColor + "-600";
  const secondaryColor = theme((state) => state.secondaryColor);
  const secondaryColorSet = "to-" + secondaryColor + "-600";

  const sourceSel = entertainmentBus((state) => state.sourceSel);

  const interiorTempVar = temperature((state) => state.interior);
  const exteriorTempVar = temperature((state) => state.exterior);

  return (
    <>
      <div id="outlet" className="fadeIn">
        <div className="absolute flex grid-cols-2 grid-rows-2 w-full h-full">
          <div className="fixed row-span-2 w-[48.5%] top-[11%] left-[1%] h-[78%] outline outline-1 outline-gray-600 rounded-lg">
            <Overview />
          </div>
          <Link to="/entertainment" className="fixed row-span-2 w-[48.5%] left-[50.5%] top-[11%] h-[38.5%] outline outline-1 outline-gray-600 rounded-lg">
            {sourceSel == "Radio" ? <Radio /> : sourceSel == "Bluetooth" ? <Bluetooth /> : sourceSel == "Aux" ? <Aux /> : <Unknown />}
          </Link>
          <div className="fixed row-span-2 w-[48.5%] left-[50.5%] top-[50.5%] h-[38.5%] outline outline-1 outline-gray-600 rounded-lg">
            {/* {sourceSel == "Radio" ? <Radio /> : sourceSel == "Bluetooth" ? <Bluetooth /> : sourceSel == "Aux" ? <Aux /> : <Unknown />} */}
          </div>
        </div>
      </div>
    </>
  )
}
function Overview() {
  const interiorTempVar = temperature((state) => state.interior);
  const exteriorTempVar = temperature((state) => state.exterior);
  return (
    <>
      <div id="outlet" className="absolute flex w-full h-full">
        <div className="flex justify-center items-center">
          <div className="absolute grid grid-cols-8 items-center text-center top-1 w-[100%]">
            {/* <div className="grid col-span-1 justify-center text-center items-center text-4xl"><FaFire /></div> */}
            <div className="grid col-span-4 text-center items-center text-lg">Interior - {interiorTempVar}°C</div>
            <div className="grid col-span-4 text-center items-center text-lg">Exterior - {exteriorTempVar}°C</div>
            {/* <div className="grid col-span-1 justify-center text-center items-center text-4xl"><FaSnowman /></div> */}
          </div>
          <img
            id="img"
            alt="Car"
            className="img bg-transparent transition-all "
            src={require("../Images/Car.png")}
          />
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
      <div className="absolute flex w-full h-full">
        <div className="flex absolute grid-cols-6 w-[100%] h-[15%] justify-evenly text-center items-center">
          {/* Radio Source */}
          {menuItems.map((m) => {
            let x = source;
            let y = m.name;
            return (
              <div
                className={`${x === y
                  ? "text-blue-500 text-xl"
                  : "text-white text-lg opacity-50"} h-max`}
              >
                {m.name}
              </div>
            );
          })}
        </div>
        <div className="transition absolute grid grid-rows-2 h-[15%] top-[15%] justify-center w-[100%] text-center">
          <div className="transition  grid row-span-1 justify-evenly w-[100%] text-center text-xl font-bold">
            {/* Radio Station */}
            <p>{source == "DAB1" || source == "DAB2" ? dabStation : source == "FM" || source == "FM-AST" ? fmStation : "??"}</p>
          </div>
          <div className="transition  grid row-span-1 justify-evenly my-2 w-[100%] text-center text-lg">
            {/* Radio Text */}
            <p>{text}</p>
          </div>
        </div >
      </div>
    </>
  );
}

function Bluetooth() {

  return (
    <>
      <div className="absolute flex w-full h-full">
        <div className="grid grid-rows-2 justify-evenly h-full w-full text-center">
          <div className="grid grid-cols-1 justify-evenly h-full w-full text-center text-lg">
            {/* Bluetooth Station */}
            <p>Bluetooth</p>
          </div>
          <div className="grid grid-cols-1 justify-evenly h-full w-full text-center text-lg">
            {/* Bluetooth Text */}
            <p>Figure this out</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Aux() {

  return (
    <>
      <div className="absolute flex w-full h-full">
        <div className="grid grid-rows-2 justify-evenly w-full text-center">
          <div className="grid grid-cols-1 justify-evenly w-full text-center text-lg">
            {/* Aux Station */}
            <p>Aux</p>
          </div>
          <div className="grid grid-cols-1 justify-evenly w-full text-center text-lg">
            {/* Aux Text */}
            <p>Guess there ain't much to show here!</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Unknown() {
  const sourceSel = entertainmentBus((state) => state.sourceSel);
  return (
    <>
      <div className="absolute flex w-full h-full">
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
      </div>
    </>
  );
}
export default Home;
