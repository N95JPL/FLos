/* eslint-disable no-unused-vars */
import { React } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCar, FaCog, FaBackward } from "react-icons/fa";
import "../Style.css";
import { theme } from "../../Stores/theme";
import { BsCode } from "react-icons/bs";

// want to start here? it will be ez for me to create whole page fast wait no
// take me to nav container where width is set

function SettingsNav() {
  const location = useLocation();
  const menuItems = [
    {
      name: "App",
      icon: <FaCog />,
      path: "/settings/app",
    },
    {
      name: "Dev",
      icon: <FaCar />,
      path: "/settings/dev",
    }
  ];
  const primaryColor = theme((state) => state.primaryColor);
  const primaryColorSet = "from-" + primaryColor + "-400";
  const secondaryColor = theme((state) => state.secondaryColor);
  const secondaryColorSet = "to-" + secondaryColor + "-600";
  return (
    <div className="absolute bottom-25 w-full flex justify-center">
      <div className="flex justify-center px-5 py-14">
        {location.pathname !== "/settings/dev" ? (
          menuItems.map((m) => {
            return (
              <Link
                to={m.path}
                className={
                  location.pathname === m.path
                    ? "SINGLE-NAVBAR-ITEM text-center bg-black bg-opacity-50 w-50 text-4xl inline-flex text-white active:text-gray-100 p-2 mx-5 rounded-lg active:bg-opacity-75 transition active:scale-95"
                    : "SINGLE-NAVBAR-ITEM text-center text-4xl text-white w-50 inline-flex active:text-gray-100 bg-black bg-opacity-20 p-2 mx-5 rounded-lg active:bg-opacity-40 transition active:scale-95"
                }
              >
                <p className="inline-flex pl-5">{m.icon}</p>
                <p className="inline-flex px-5">{m.name}</p>
              </Link>
            );
          })
        ) : (
          <>
            <Link
              to="/settings/app"
              className={
                location.pathname === "/settings/app"
                  ? "SINGLE-NAVBAR-ITEM text-center bg-black bg-opacity-50 w-50 text-4xl inline-flex text-white active:text-gray-100 p-2 mx-5 rounded-lg active:bg-opacity-75 transition active:scale-95"
                  : "SINGLE-NAVBAR-ITEM text-center text-4xl text-white w-50 inline-flex active:text-gray-100 bg-black bg-opacity-20 p-2 mx-5 rounded-lg active:bg-opacity-40 transition active:scale-95"
              }
            >
              <FaBackward className="text-emerald-400" />
              <p className="inline-flex px-5">Go Back</p>
            </Link>
            <Link
              to="/settings/dev"
              className={
                location.pathname === "/settings/dev"
                  ? "SINGLE-NAVBAR-ITEM text-center bg-black bg-opacity-50 w-50 text-4xl inline-flex text-white active:text-gray-100 p-2 mx-5 rounded-lg active:bg-opacity-75 transition active:scale-95"
                  : "SINGLE-NAVBAR-ITEM text-center text-4xl text-white w-50 inline-flex active:text-gray-100 bg-black bg-opacity-20 p-2 mx-5 rounded-lg active:bg-opacity-40 transition active:scale-95"
              }
            >
              <BsCode className="text-emerald-400" />
              <p className="inline-flex px-5">Dev Mode</p>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default SettingsNav;
