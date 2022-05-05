import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Style.css";
import { mediumSpeed, theme } from "../index";
import { FaFire, FaSnowman } from "react-icons/fa";
import frontHeater from "../Images/frontHeater.svg";
import defrost from "../Images/defrost.svg";
import rearHeater from "../Images/rearHeater.svg";
import recirc from "../Images/recirc.svg";
import auto from "../Images/auto.svg";

function Climate() {
  const driverTempVar = mediumSpeed((state) => state.driver);
  const passTempVar = mediumSpeed((state) => state.passenger);
  const interiorTempVar = mediumSpeed((state) => state.interior);
  const autoVar = mediumSpeed((state) => state.auto);
  const frontHeaterVar = mediumSpeed((state) => state.frontHeater);
  const defrostVar = mediumSpeed((state) => state.defrost);
  const rearHeaterVar = mediumSpeed((state) => state.rearHeater);
  const recircVar = mediumSpeed((state) => state.recirc);

  const primaryColor = theme((state) => state.primaryColor);
  const primaryColorSet = " from-" + primaryColor + "-600";
  const secondaryColor = theme((state) => state.secondaryColor);
  const secondaryColorSet = "to-" + secondaryColor + "-600";

  const topButtons = [
    {
      name: "frontHeater",
      image: frontHeater,
      state: frontHeaterVar,
    },
    {
      name: "defrost",
      image: defrost,
      state: defrostVar,
    },
    {
      name: "auto",
      image: auto,
      state: autoVar,
    },
    {
      name: "rearHeater",
      image: rearHeater,
      state: rearHeaterVar,
    },
    {
      name: "recirc",
      image: recirc,
      state: recircVar,
    },
  ];

  return (
    <>
      <div className="px-5 py-10 w-screen h-screen">
        <div className="flex justify-between w-full pr-[100px] gap-5">
          {topButtons.map((t) => {
            return (
              <div
                onTouchStart={window.ipcRenderer.send("action", {
                  type: t.name,
                  press: true,
                })}
                onTouchEnd={window.ipcRenderer.send("action", {
                  type: t.name,
                  press: false,
                })}
                className={
                  t.state
                    ? "SINGLE-NAVBAR-ITEM inline-flex items-center w-full bg-gradient-to-br " +
                      primaryColorSet +
                      " " +
                      secondaryColorSet +
                      " text-4xl text-white active:text-gray-100 h-[68px] p-4 rounded-lg active:bg-opacity-75 transition active:scale-95 "
                    : "SINGLE-NAVBAR-ITEM inline-flex items-center w-full bg-black bg-opacity-40 text-4xl text-white active:text-gray-100 h-[68px] p-4 rounded-lg active:bg-opacity-75 transition active:scale-95"
                }
              >
                <img alt="ac" src={t.image} className="w-[60px] flex mx-auto" />
              </div>
            );
          })}
        </div>

        <div className="flex justify-between w-full pr-[100px] pt-10 gap-5 ">
          <div className="grid grid-cols-3 justify-evenly h-full w-full text-center">
            <div className="grid grid-row-3 justify-evenly h-full content-center items-center text-center">
              <div>
                <div
                  className="text-6xl items-center justify-center flex bg-opacity-20 gap-5 h-[100px] w-[100px] bg-black text-white active:text-gray-100 rounded-lg active:bg-opacity-75 transition active:scale-95"
                  onTouchStart={() =>
                    window.ipcRenderer.send("action", {
                      type: "passUp",
                      press: true,
                    })
                  }
                  onTouchEnd={() =>
                    window.ipcRenderer.send("action", {
                      type: "passUp",
                      press: false,
                    })
                  }
                >
                  <FaChevronUp className="text-red-400" />
                </div>
              </div>
              <div className="justify-center content-center font-bold text-4xl flex h-[30px] w-[100px] mt-5 mb-7 text-center">
                {passTempVar === undefined ? (
                  "--°C"
                ) : passTempVar === "HIGH" ? (
                  <FaFire color="red" />
                ) : passTempVar === "LOW" ? (
                  <FaSnowman color="skyblue" />
                ) : (
                  passTempVar + "°C"
                )}
              </div>
              <div>
                <div
                  className="text-6xl items-center justify-center flex bg-opacity-20 gap-5 h-[100px] w-[100px] bg-black text-white active:text-gray-100 rounded-lg active:bg-opacity-75 transition active:scale-95"
                  onTouchStart={() =>
                    window.ipcRenderer.send("action", {
                      type: "passDown",
                      press: true,
                    })
                  }
                  onTouchEnd={() =>
                    window.ipcRenderer.send("action", {
                      type: "passDown",
                      press: false,
                    })
                  }
                >
                  <FaChevronDown className="text-blue-400" />
                </div>
              </div>
            </div>
            {/* Center Column */}
            <div className="grid justify-center w-full h-full text-center align-middle ">
              <div className="content-center place-self-center h-[60px] font-bold text-4xl justify-center gap-5 w-[140px] flex items-center bg-gradient-to-br from-gray-600 to-gray-800 bg-opacity-40 text-white rounded-lg">
                {interiorTempVar}°C
              </div>
            </div>
            <div className="grid grid-row-3 justify-evenly h-full content-center items-center text-center">
              <div>
                <div
                  className="text-6xl items-center justify-center flex bg-opacity-20 gap-5 h-[100px] w-[100px] bg-black text-white active:text-gray-100 rounded-lg active:bg-opacity-75 transition active:scale-95"
                  onTouchStart={() =>
                    window.ipcRenderer.send("action", {
                      type: "driverUp",
                      press: true,
                    })
                  }
                  onTouchEnd={() =>
                    window.ipcRenderer.send("action", {
                      type: "driverUp",
                      press: false,
                    })
                  }
                >
                  <FaChevronUp className="text-red-400" />
                </div>
              </div>
              <div>
                <div className="justify-center content-center font-bold text-4xl flex h-[30px] w-[100px] mt-5 mb-7 text-center">
                  {driverTempVar === undefined ? (
                    "--°C"
                  ) : driverTempVar === "HIGH" ? (
                    <FaFire color="red" />
                  ) : driverTempVar === "LOW" ? (
                    <FaSnowman color="skyblue" />
                  ) : (
                    driverTempVar + "°C"
                  )}
                </div>
              </div>
              <div>
                <div
                  className="text-6xl items-center justify-center flex bg-opacity-20 gap-5 h-[100px] w-[100px] bg-black text-white active:text-gray-100 rounded-lg active:bg-opacity-75 transition active:scale-95"
                  onTouchStart={() =>
                    window.ipcRenderer.send("action", {
                      type: "driverDown",
                      press: true,
                    })
                  }
                  onTouchEnd={() =>
                    window.ipcRenderer.send("action", {
                      type: "driverDown",
                      press: false,
                    })
                  }
                >
                  <FaChevronDown className="text-blue-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Climate;
