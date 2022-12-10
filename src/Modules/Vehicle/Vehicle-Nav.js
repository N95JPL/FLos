/* eslint-disable no-unused-vars */
import { React } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCar, FaCog, FaBackward } from "react-icons/fa";
import "../Style.css";
import { theme } from "../../Stores/theme";
import { BsCode } from "react-icons/bs";

// want to start here? it will be ez for me to create whole page fast wait no
// take me to nav container where width is set

function VehicleNav() {
  const location = useLocation();
  const menuItems = [
    {
      name: "Electrical",
      icon: <FaCar />,
      path: "/vehicle/electrical",
    },
    {
      name: "Engine",
      icon: <FaCog />,
      path: "/vehicle/engine",
    },
    {
      name: "Dashboard",
      icon: <FaCog />,
      path: "/vehicle/dashboard",
    },
    {
      name: "CCF",
      icon: <FaCog />,
      path: "/vehicle/ccf",
    },
    {
      name: "Detailed",
      icon: <FaCog />,
      path: "/vehicle/detail",
    },
  ];
  const primaryColor = theme((state) => state.primaryColor);
  const primaryColorSet = "from-" + primaryColor + "-400";
  const secondaryColor = theme((state) => state.secondaryColor);
  const secondaryColorSet = "to-" + secondaryColor + "-600";
  return (
    <div
      className={`NAVBAR-CONTAINER shadow-lg inline-flex fixed h-20 w-full transition`}
    >
      <div className="NAVBAR-ITEMS transition flex flex-row justify-center px-5 items-center w-5/6">
        {
          menuItems.map((m) => {
            return (
              <Link
                onClick={() => {
                  window.api.sendLog("Clicked on " + m.name);
                }}
                to={m.path}
                className={
                  location.pathname === m.path
                    ? "SINGLE-NAVBAR-ITEM text-center bg-black bg-opacity-50 w-[20%] text-4xl inline-flex text-white active:text-gray-100 p-4 m-2 rounded-lg active:bg-opacity-75 transition active:scale-95"
                    : "SINGLE-NAVBAR-ITEM text-center text-4xl text-white w-[20%] inline-flex active:text-gray-100 bg-black bg-opacity-20 p-4 m-2 rounded-lg active:bg-opacity-40 transition active:scale-95"
                }
              >
                <p className="inline-flex pl-5">{m.icon}</p>
              </Link>
            );
          })
        }
      </div>
    </div>
  );
}
export default VehicleNav;
