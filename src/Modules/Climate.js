import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Style.css";
import { theme } from "../Stores/theme";
import { mediumSpeed } from "../Stores/mediumSpeed";
import { FaFire, FaSnowman } from "react-icons/fa";
import { GiCarSeat } from "react-icons/gi";
import frontHeater from "../Images/frontHeater.svg";
import defrost from "../Images/defrost.svg";
import rearHeater from "../Images/rearHeater.svg";
import recirc from "../Images/recirc.svg";
import auto from "../Images/auto.svg";
import driverSeat from '../Images/driverSeat.svg';
import { SvgIcon } from "@mui/material";

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
      name: "defrost",
      image: defrost,
      state: defrostVar,
    },
    {
      name: "frontHeater",
      image: frontHeater,
      state: frontHeaterVar,
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
          <div className="grid grid-cols-5 justify-evenly h-full w-full text-center">
            {/* Pass Seat Heat*/}
            <div className="grid grid-row-3 justify-evenly h-full content-center items-center text-center">
              <div>
                <div
                  className="items-center text-center justify-center flex bg-opacity-20 gap-5 h-[100px] w-[100px] bg-black text-white active:text-gray-100 rounded-lg active:bg-opacity-75 transition active:scale-95"
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
                  <svg
                    class={`${passTempVar !== "HIGH" ? `fill-red-400` : `fill-gray-400`} flex w-[90px] h-[90px] scale-90 ml-[-5px]`}
                    viewBox="0 0 128 128"
                    version="1.1"
                    id="svg24"
                    width="100"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs
                      id="defs28" />
                    <path
                      d="M -3.8146973e-7,-8.392334e-7 H 512 V 512 H -3.814697e-7 Z"
                      fill="#000"
                      fill-opacity="0"
                      id="path18"
                    />
                    <g
                      class=""
                      id="g22"
                      transform="matrix(0.21267546,0,0,0.21339251,18.423394,14.457845)">
                      <path
                        d="m 71.47,18.38 -0.01,0.01 c -6.58,-0.1 -14.25,0.79 -21.52,2.41 -8.31,1.84 -16.18,4.69 -21.3,7.56 -2.57,1.44 -4.42,2.9 -5.24,3.8 L 49.26,122.7 C 56.48,113.6 64.67,106.1 73.01,100.5 82.7,94.06 92.2,89.83 100.9,88.03 100.9,74.89 100.6,62.11 99.1,51.27 97.2,38.22 93.5,28.24 87.6,22.36 86.3,21.01 81.32,18.92 74.21,18.48 c -0.89,0 -1.81,-0.1 -2.74,-0.1 z m 29.03,92.12 c -6.7,0.4 -14.2,3.5 -21.1,8.7 -13.68,10.3 -24.04,28.7 -24.34,40.2 L 100.8,399.7 C 108.4,390.2 120,384 133,384 c 11.5,0 22,4.9 29.5,12.7 5.1,-1.1 10.5,-2.2 16.4,-3.3 1.5,-0.3 3.1,-0.5 4.7,-0.8 -13.5,-92.5 -35.3,-199.6 -65.2,-275.3 -5.2,-4.8 -10.3,-6.7 -15.6,-6.8 z m 244.3,284.8 c -21.5,0.1 -46.3,1.4 -71,3.7 -33,2.9 -66,7.4 -91.6,12.1 -3.5,0.6 -6.8,1.3 -10,1.9 1.2,3.8 1.8,7.8 1.8,12 0,22.5 -18.5,41 -41,41 -5.6,0 -11,-1.2 -15.9,-3.2 -3.1,8.9 -5.4,17.6 -6.7,24.2 H 398 c 5,0 7.7,-1.8 10.7,-6.4 3.1,-4.7 5.4,-12.4 6.3,-21.5 1.9,-18.1 -2.1,-41.2 -9.1,-55.1 0.3,0.5 -2.8,-2.5 -10.2,-4.4 -7.4,-1.9 -18.1,-3.3 -30.7,-3.9 -6.3,-0.3 -13.1,-0.4 -20.2,-0.4 z M 133,402 c -12.8,0 -23,10.2 -23,23 0,12.8 10.2,23 23,23 12.8,0 23,-10.2 23,-23 0,-12.8 -10.2,-23 -23,-23 z"
                        fill-opacity="1"
                        id="path20"
                      />
                    </g>
                  </svg>
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
                  <svg
                    class={`${passTempVar !== "LOW" ? `fill-blue-400` : `fill-gray-400`} flex w-[90px] h-[90px] scale-90 ml-[-5px]`}
                    viewBox="0 0 128 128"
                    version="1.1"
                    id="svg24"
                    width="100"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs
                      id="defs28" />
                    <path
                      d="M -3.8146973e-7,-8.392334e-7 H 512 V 512 H -3.814697e-7 Z"
                      fill="#000"
                      fill-opacity="0"
                      id="path18"
                    />
                    <g
                      class=""
                      id="g22"
                      transform="matrix(0.21267546,0,0,0.21339251,18.423394,14.457845)">
                      <path
                        d="m 71.47,18.38 -0.01,0.01 c -6.58,-0.1 -14.25,0.79 -21.52,2.41 -8.31,1.84 -16.18,4.69 -21.3,7.56 -2.57,1.44 -4.42,2.9 -5.24,3.8 L 49.26,122.7 C 56.48,113.6 64.67,106.1 73.01,100.5 82.7,94.06 92.2,89.83 100.9,88.03 100.9,74.89 100.6,62.11 99.1,51.27 97.2,38.22 93.5,28.24 87.6,22.36 86.3,21.01 81.32,18.92 74.21,18.48 c -0.89,0 -1.81,-0.1 -2.74,-0.1 z m 29.03,92.12 c -6.7,0.4 -14.2,3.5 -21.1,8.7 -13.68,10.3 -24.04,28.7 -24.34,40.2 L 100.8,399.7 C 108.4,390.2 120,384 133,384 c 11.5,0 22,4.9 29.5,12.7 5.1,-1.1 10.5,-2.2 16.4,-3.3 1.5,-0.3 3.1,-0.5 4.7,-0.8 -13.5,-92.5 -35.3,-199.6 -65.2,-275.3 -5.2,-4.8 -10.3,-6.7 -15.6,-6.8 z m 244.3,284.8 c -21.5,0.1 -46.3,1.4 -71,3.7 -33,2.9 -66,7.4 -91.6,12.1 -3.5,0.6 -6.8,1.3 -10,1.9 1.2,3.8 1.8,7.8 1.8,12 0,22.5 -18.5,41 -41,41 -5.6,0 -11,-1.2 -15.9,-3.2 -3.1,8.9 -5.4,17.6 -6.7,24.2 H 398 c 5,0 7.7,-1.8 10.7,-6.4 3.1,-4.7 5.4,-12.4 6.3,-21.5 1.9,-18.1 -2.1,-41.2 -9.1,-55.1 0.3,0.5 -2.8,-2.5 -10.2,-4.4 -7.4,-1.9 -18.1,-3.3 -30.7,-3.9 -6.3,-0.3 -13.1,-0.4 -20.2,-0.4 z M 133,402 c -12.8,0 -23,10.2 -23,23 0,12.8 10.2,23 23,23 12.8,0 23,-10.2 23,-23 0,-12.8 -10.2,-23 -23,-23 z"
                        fill-opacity="1"
                        id="path20"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            {/* Pass Temp */}
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
                  <FaChevronUp className={passTempVar !== "HIGH" ? `text-red-400` : `text-gray-400`} />
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
                  <FaChevronDown className={passTempVar !== "LOW" ? `text-blue-400` : `text-gray-400`} />
                </div>
              </div>
            </div>
            {/* Center Column */}
            <div className="grid justify-center w-full h-full text-center align-middle ">
              <div className="content-center place-self-center h-[60px] font-bold text-4xl justify-center gap-5 w-[140px] flex items-center bg-gradient-to-br from-gray-600 to-gray-800 bg-opacity-40 text-white rounded-lg">
                {interiorTempVar}°C
              </div>
            </div>
            {/* Driver Temp */}
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
                  <FaChevronUp className={driverTempVar !== "HIGH" ? `text-red-400` : `text-gray-400`} />
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
                  <FaChevronDown className={driverTempVar !== "LOW" ? `text-blue-400` : `text-gray-400`} />
                </div>
              </div>
            </div>
            {/* Driver Seat Heat */}
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
                  <svg
                    class={`${driverTempVar !== "HIGH" ? `fill-red-400` : `fill-gray-400`} flex w-[90px] h-[90px] scale-90 ml-[-5px]`}
                    viewBox="0 0 128 128"
                    version="1.1"
                    id="svg24"
                    width="100"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs
                      id="defs28" />
                    <path
                      fill="#000"
                      d="M -3.8146973e-7,-8.392334e-7 H 512 V 512 H -3.814697e-7 Z"
                      fill-opacity="0"
                      id="path18"
                    />
                    <g
                      id="g22"
                      transform="matrix(0.21267546,0,0,0.21339251,18.423394,14.457845)">
                      <path
                        d="m 71.47,18.38 -0.01,0.01 c -6.58,-0.1 -14.25,0.79 -21.52,2.41 -8.31,1.84 -16.18,4.69 -21.3,7.56 -2.57,1.44 -4.42,2.9 -5.24,3.8 L 49.26,122.7 C 56.48,113.6 64.67,106.1 73.01,100.5 82.7,94.06 92.2,89.83 100.9,88.03 100.9,74.89 100.6,62.11 99.1,51.27 97.2,38.22 93.5,28.24 87.6,22.36 86.3,21.01 81.32,18.92 74.21,18.48 c -0.89,0 -1.81,-0.1 -2.74,-0.1 z m 29.03,92.12 c -6.7,0.4 -14.2,3.5 -21.1,8.7 -13.68,10.3 -24.04,28.7 -24.34,40.2 L 100.8,399.7 C 108.4,390.2 120,384 133,384 c 11.5,0 22,4.9 29.5,12.7 5.1,-1.1 10.5,-2.2 16.4,-3.3 1.5,-0.3 3.1,-0.5 4.7,-0.8 -13.5,-92.5 -35.3,-199.6 -65.2,-275.3 -5.2,-4.8 -10.3,-6.7 -15.6,-6.8 z m 283,39.5 -53.6,167.4 17.2,5.4 24,-75.1 117.1,37.5 5.4,-17.2 -117,-37.4 24.1,-75.2 z m -38.7,245.3 c -21.5,0.1 -46.3,1.4 -71,3.7 -33,2.9 -66,7.4 -91.6,12.1 -3.5,0.6 -6.8,1.3 -10,1.9 1.2,3.8 1.8,7.8 1.8,12 0,22.5 -18.5,41 -41,41 -5.6,0 -11,-1.2 -15.9,-3.2 -3.1,8.9 -5.4,17.6 -6.7,24.2 H 398 c 5,0 7.7,-1.8 10.7,-6.4 3.1,-4.7 5.4,-12.4 6.3,-21.5 1.9,-18.1 -2.1,-41.2 -9.1,-55.1 0.3,0.5 -2.8,-2.5 -10.2,-4.4 -7.4,-1.9 -18.1,-3.3 -30.7,-3.9 -6.3,-0.3 -13.1,-0.4 -20.2,-0.4 z M 133,402 c -12.8,0 -23,10.2 -23,23 0,12.8 10.2,23 23,23 12.8,0 23,-10.2 23,-23 0,-12.8 -10.2,-23 -23,-23 z"
                        fill-opacity="1"
                        id="path20"
                      />
                    </g>
                  </svg>
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
                  className="items-center justify-center flex bg-opacity-20 gap-5 h-[100px] w-[100px] bg-black text-white active:text-gray-100 rounded-lg active:bg-opacity-75 transition active:scale-95"
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
                  <svg
                    class={`${driverTempVar !== "LOW" ? `fill-blue-400` : `fill-gray-400`} flex w-[90px] h-[90px] scale-90 ml-[-5px]`}
                    viewBox="0 0 128 128"
                    version="1.1"
                    id="svg24"
                    width="100"
                    height="100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs
                      id="defs28" />
                    <path
                      fill="#000"
                      d="M -3.8146973e-7,-8.392334e-7 H 512 V 512 H -3.814697e-7 Z"
                      fill-opacity="0"
                      id="path18"
                    />
                    <g
                      id="g22"
                      transform="matrix(0.21267546,0,0,0.21339251,18.423394,14.457845)">
                      <path
                        d="m 71.47,18.38 -0.01,0.01 c -6.58,-0.1 -14.25,0.79 -21.52,2.41 -8.31,1.84 -16.18,4.69 -21.3,7.56 -2.57,1.44 -4.42,2.9 -5.24,3.8 L 49.26,122.7 C 56.48,113.6 64.67,106.1 73.01,100.5 82.7,94.06 92.2,89.83 100.9,88.03 100.9,74.89 100.6,62.11 99.1,51.27 97.2,38.22 93.5,28.24 87.6,22.36 86.3,21.01 81.32,18.92 74.21,18.48 c -0.89,0 -1.81,-0.1 -2.74,-0.1 z m 29.03,92.12 c -6.7,0.4 -14.2,3.5 -21.1,8.7 -13.68,10.3 -24.04,28.7 -24.34,40.2 L 100.8,399.7 C 108.4,390.2 120,384 133,384 c 11.5,0 22,4.9 29.5,12.7 5.1,-1.1 10.5,-2.2 16.4,-3.3 1.5,-0.3 3.1,-0.5 4.7,-0.8 -13.5,-92.5 -35.3,-199.6 -65.2,-275.3 -5.2,-4.8 -10.3,-6.7 -15.6,-6.8 z m 283,39.5 -53.6,167.4 17.2,5.4 24,-75.1 117.1,37.5 5.4,-17.2 -117,-37.4 24.1,-75.2 z m -38.7,245.3 c -21.5,0.1 -46.3,1.4 -71,3.7 -33,2.9 -66,7.4 -91.6,12.1 -3.5,0.6 -6.8,1.3 -10,1.9 1.2,3.8 1.8,7.8 1.8,12 0,22.5 -18.5,41 -41,41 -5.6,0 -11,-1.2 -15.9,-3.2 -3.1,8.9 -5.4,17.6 -6.7,24.2 H 398 c 5,0 7.7,-1.8 10.7,-6.4 3.1,-4.7 5.4,-12.4 6.3,-21.5 1.9,-18.1 -2.1,-41.2 -9.1,-55.1 0.3,0.5 -2.8,-2.5 -10.2,-4.4 -7.4,-1.9 -18.1,-3.3 -30.7,-3.9 -6.3,-0.3 -13.1,-0.4 -20.2,-0.4 z M 133,402 c -12.8,0 -23,10.2 -23,23 0,12.8 10.2,23 23,23 12.8,0 23,-10.2 23,-23 0,-12.8 -10.2,-23 -23,-23 z"
                        fill-opacity="1"
                        id="path20"
                      />
                    </g>
                  </svg>
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
