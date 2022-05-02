import React from "react";

import "./Style.css";
import { mediumSpeed } from "../index";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
                className={
                  t.state
                    ? "SINGLE-NAVBAR-ITEM inline-flex items-center w-full bg-gradient-to-br from-blue-400 to-sky-600 text-4xl text-white active:text-gray-100 h-[68px] p-4 rounded-lg active:bg-opacity-75 transition active:scale-95 "
                    : "SINGLE-NAVBAR-ITEM inline-flex items-center w-full bg-black bg-opacity-40 text-4xl text-white active:text-gray-100 h-[68px] p-4 rounded-lg active:bg-opacity-75 transition active:scale-95"
                }
              >
                <img alt="ac" src={t.image} className="w-[60px] flex mx-auto" />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between w-full pr-[100px] pt-10 gap-5">
          <div className="grid grid-cols-3 justify-evenly h-full w-full text-center">
            <div className="grid grid-row-3 justify-evenly h-full content-center items-center text-center">
              <div>
                <div
                  className="justify-center gap-5 h-[100px] w-[100px] flex-auto items-center  bg-black bg-opacity-40 text-4xl text-white active:text-gray-100  rounded-lg active:bg-opacity-75 transition active:scale-95"
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
                  <KeyboardArrowUpIcon
                    style={{ color: "red" }}
                    className="temp_icons items-center flex pt-2"
                  />
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
                  className="justify-center gap-5 h-[100px] w-[100px] flex-auto items-center  bg-black bg-opacity-40 text-4xl text-white active:text-gray-100  rounded-lg active:bg-opacity-75 transition active:scale-95"
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
                  <KeyboardArrowDownIcon
                    style={{ color: "blue" }}
                    className="temp_icons items-center flex pt-2"
                  />
                </div>
              </div>
            </div>
            <div className="grid justify-evenly h-full text-center">
              <div>TEST</div>
            </div>
            <div className="grid grid-row-3 justify-evenly h-full content-center items-center text-center">
              <div>
                <div
                  className="justify-center gap-5 h-[100px] w-[100px] flex-auto items-center  bg-black bg-opacity-40 text-4xl text-white active:text-gray-100  rounded-lg active:bg-opacity-75 transition active:scale-95"
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
                  <KeyboardArrowUpIcon
                    style={{ color: "red" }}
                    className="temp_icons items-center flex pt-2"
                  />
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
                  className="justify-center gap-5 h-[100px] w-[100px] flex-auto items-center  bg-black bg-opacity-40 text-4xl text-white active:text-gray-100  rounded-lg active:bg-opacity-75 transition active:scale-95"
                  onTouchStart={() =>
                    window.ipcRenderer.send("action", {
                      type: "driverUp",
                      press: true,
                    })
                  }
                  onTouchEnd={() =>
                    window.ipcRenderer.send("action", {
                      type: name + "Up",
                      press: false,
                    })
                  }
                >
                  <KeyboardArrowDownIcon
                    style={{ color: "blue" }}
                    className="temp_icons items-center flex pt-2"
                  />
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

//     <div className="App-outlet">
//       <div className="container">
//         <div className="Buttons">
//           <div className=""><ButtonPanel name='frontHeater' img={frontHeater} value={frontHeaterVar}/></div>
//           <div className=""><ButtonPanel name='defrost' img={defrost} value={defrostVar} /></div>
//           <div className=""><ButtonPanel name="auto" img={frontHeater} value={autoVar}/></div>
//           <div className="-2"><ButtonPanel name='rearHeater' img={rearHeater} value={rearHeaterVar}/></div>
//           <div className="bg-black w-screen"><ButtonPanel name='recirc' img={recirc} value={recircVar}/></div>
//         </div>
//         <div className="Climate">
//           <div className="Climate-Left"><TempPanel name="pass" value={passTempVar} /></div>
//           <div className="Climate-Center"><div>{interiorTempVar}°C</div><div>This will have stuff</div></div>
//           <div className="Climate-Right"><TempPanel name="driver" value={driverTempVar} /></div>
//         </div>
//       </div>
//       </div>
//   )
// }

// // eslint-disable-next-line react/prop-types
// const ButtonPanel = ({ name, img, value }) => {
//   return (
//     <div>
//       {name === 'auto'
//         ? <Button style={{ height: '80px', width: '80px', marginTop: '0px' }} className='Buttons' onTouchStart={() =>
//           window.ipcRenderer.send('action', { type: name, press: true })
//         }
//         onTouchEnd={() =>
//           window.ipcRenderer.send('action', { type: name, press: false })
//         }><h1 className={ value ? 'text-blue-600' : 'text-white' }>AUTO</h1></Button>
//         : <Button style={{ height: '80px', width: '80px', marginTop: '0px' }} className='Buttons' onTouchStart={() =>
//           window.ipcRenderer.send('action', { type: name, press: true })
//         }
//         onTouchEnd={() =>
//           window.ipcRenderer.send('action', { type: name, press: false })
//         }><img className={ value ? 'fill-blue-600 bg-gray-400' : 'fill-white bg-gray-900' } src={img} alt={name} /></Button>}
//     </div>
//   )
// }

// // eslint-disable-next-line react/prop-types
// const ButtonInd = ({ value }) => {
//   return (
//     <div>
//       <div className={value > 0 ? 'bg-yellow-500 h-5' : 'bg-slate-500 h-5'}></div>
//     </div>
//   )
// }
// // eslint-disable-next-line react/prop-types
// const TempPanel = ({ name, value }) => {
//   return (
//     <div>
//       <Button style={{ height: '120px', width: '120px', marginTop: '0px' }}
//         onTouchStart={() =>
//           window.ipcRenderer.send('action', { type: name + 'Up', press: true })
//         }
//         onTouchEnd={() =>
//           window.ipcRenderer.send('action', { type: name + 'Up', press: false })
//         }
//       >
//         <KeyboardArrowUpIcon style={{ color: 'red' }} className="temp_icons" />
//       </Button>
//       <div style={{ height: '30px' }} />
// <Typography align={'center'} variant="h2" component="h1" style={{ marginTop: '-40px' }}>
//   {value === undefined ? '--°C' : value === 'HIGH' ? value : value === 'LOW' ? value : value + '°C'}
// </Typography>
//       <div style={{ height: '30px' }} />
//       <Button style={{ height: '120px', width: '120px', marginTop: '-40px' }}
//         onTouchStart={() =>
//           window.ipcRenderer.send('action', { type: name + 'Down', press: true })
//         }
//         onTouchEnd={() =>
//           window.ipcRenderer.send('action', { type: name + 'Down', press: false })
//         }
//       >
//         <KeyboardArrowDownIcon
//           style={{ color: 'blue' }}
//           className="temp_icons"
//         />
//       </Button>
//     </div>
