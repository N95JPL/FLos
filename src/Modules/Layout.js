import { FaCar, FaPhoneAlt, FaCog } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { mediumSpeed } from "../index";
import "./Style.css";

function Layout() {
  const location = useLocation();
  const menuItems = [
    {
      name: "Home",
      icon: <BsSnow />,
      path: "/",
    },
    {
      name: "Vehicle",
      icon: <FaCar />,
      path: "/vehicle",
    },
    {
      name: "Carplay",
      icon: <FaPhoneAlt />,
      path: "/carplay",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
  ];

  const [Page, setPage] = useState("Home");
  const hour = mediumSpeed((state) => state.hour);
  const minute = mediumSpeed((state) => state.minute);
  const second = mediumSpeed((state) => state.second);

  return (
    <>
      <div className="NAVBAR-CONTAINER shadow-lg bg-gradient-to-br from-blue-400 to-sky-600 inline-flex h-screen absolute z-10 left-0">
        <div className="flex absolute justify-center items-center w-full">
          <p className="py-0.75 m-2 text-xl font-bold">
            {hour}:{minute}
          </p>
        </div>
        <div className="NAVBAR-ITEMS flex flex-col justify-between py-5 items-center h-full">
          {menuItems.map((m) => {
            return (
              <Link
                to={m.path}
                onClick={() => {
                  setPage(m.name);
                }}
                className={
                  location.pathname === m.path
                    ? "SINGLE-NAVBAR-ITEM bg-black bg-opacity-50 text-4xl text-white active:text-gray-100  p-4 m-5 rounded-lg active:bg-opacity-75 transition active:scale-95"
                    : "SINGLE-NAVBAR-ITEM text-4xl text-white active:text-gray-100 bg-black bg-opacity-20 p-4 m-5 rounded-lg active:bg-opacity-40 transition active:scale-95"
                }
              >
                {m.icon}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="absolute left-[105px]">
        <Outlet />
      </div>
    </>
    //   <div className="App-sidebar px-10">
    //     <nav>
    //       <ul>
    //         <div className='App-sidebar-time bg-blue-900'>{hour}:{minute}:{second}</div>
    //         <Link to="/">
    //           <li
    //             id="HomeNav"
    //             className=" flex justify-center"
    //             onClick={() => {
    //               setPage('Home')
    //               const element = document.getElementById('Outlet')
    //               element.classList.remove('fadePage')
    //               element.classList.add('fadePage')
    //             }}
    //           >
    //             <div
    //               className={`App-sidebar-active ${Page === 'Home' ? 'bg-red-600' : ''
    //                 }`}
    //             />
    //             <button>
    //               <BsSnow className="nav_icons" />
    //             </button>
    //           </li>
    //         </Link>
    //         <Link to="/vehicle">
    //           <li
    //             id="VehicleNav"
    //             className="App-sidebar-nav bg-blue-900 hover:bg-blue-400 active:bg-blue-50 flex justify-center"
    //             onClick={() => {
    //               setPage('Vehicle')
    //             }}
    //           >
    //             <div
    //               className={`App-sidebar-active ${Page === 'Vehicle' ? 'bg-red-600' : ''
    //                 }`}
    //             />
    //             <button>
    //               <FaCar className="nav_icons" />
    //             </button>
    //           </li>
    //         </Link>
    //         <Link to="/carplay">
    //           <li
    //             id="CarplayNav"
    //             className="App-sidebar-nav bg-blue-900 hover:bg-blue-400 active:bg-blue-50 flex justify-center"
    //             onClick={() => {
    //               setPage('Carplay')
    //             }}
    //           >
    //             <div
    //               className={`App-sidebar-active ${Page === 'Carplay' ? 'bg-red-600' : ''
    //                 }`}
    //             />
    //             <button>
    //               <FaPhoneAlt className="nav_icons" />
    //             </button>
    //           </li>
    //         </Link>
    //         <Link to="/settings">
    //           <li
    //             id="SettingsNav"
    //             className="App-sidebar-nav bg-blue-900 hover:bg-blue-400 active:bg-blue-50 flex justify-center"
    //             onClick={() => {
    //               setPage('Settings')
    //             }}
    //           >
    //             <div
    //               className={`App-sidebar-active ${Page === 'Settings' ? 'bg-red-600' : ''
    //                 }`}
    //             />
    //             <button>
    //               <FaCog className="nav_icons" />
    //             </button>
    //           </li>
    //         </Link>
    //       </ul>
    //     </nav>
    //   </div>
    //   <div id="Outlet" className="fadePage"><Outlet /></div>
    // </div>
  );
}

export default Layout;
