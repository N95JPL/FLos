import { React } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCar, FaCog } from "react-icons/fa";
import "../Style.css";
import { theme } from "../../index";

// want to start here? it will be ez for me to create whole page fast wait no
// take me to nav container where width is set

function SettingsNav() {
  const location = useLocation();
  const menuItems = [
    {
      name: "App",
      icon: <FaCog />,
      path: "/settings",
    },
    {
      name: "Vehicle",
      icon: <FaCar />,
      path: "/settings/vehicle",
    },
  ];
  const primaryColor = theme((state) => state.primaryColor);
  const primaryColorSet = "from-" + primaryColor + "-400";
  const secondaryColor = theme((state) => state.secondaryColor);
  const secondaryColorSet = "to-" + secondaryColor + "-600";
  return (
    <div className="App-outlet">
      <div
        className={`NAVBAR-CONTAINER shadow-lg inline-flex fixed h-20 w-full transition`}
      >
        <div className="NAVBAR-ITEMS flex flex-row justify-center px-5 items-center w-5/6">
          {menuItems.map((m) => {
            return (
              <Link
                to={m.path}
                className={
                  location.pathname === m.path
                    ? "SINGLE-NAVBAR-ITEM bg-black bg-opacity-50 w-50 text-4xl inline-flex text-white active:text-gray-100  p-2 m-5 rounded-lg active:bg-opacity-75 transition active:scale-95"
                    : "SINGLE-NAVBAR-ITEM text-4xl text-white w-50 inline-flex active:text-gray-100 bg-black bg-opacity-20 p-2 m-5 rounded-lg active:bg-opacity-40 transition active:scale-95"
                }
              >
                <p className="inline-flex pl-5">{m.icon}</p>
                <p className="inline-flex px-5">{m.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default SettingsNav;
