import { React } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaCar, FaCog } from "react-icons/fa";
import "../Style.css";
import { theme } from "../../Stores/theme";
import { BsCode } from "react-icons/bs";

// want to start here? it will be ez for me to create whole page fast wait no
// take me to nav container where width is set

function SettingsNav() {
  const location = useLocation();
  const menuItems = [
    {
      name: "Vehicle",
      icon: <FaCar />,
      path: "/settings/vehicle",
    },
    {
      name: "App",
      icon: <FaCog />,
      path: "/settings/app",
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
        <div className="NAVBAR-ITEMS transition flex flex-row justify-center px-5 items-center w-5/6">
          {location.pathname !== "/settings/dev" ? (
            menuItems.map((m) => {
              return (
                <Link
                  to={m.path}
                  className={
                    location.pathname === m.path
                      ? "SINGLE-NAVBAR-ITEM text-center bg-black bg-opacity-50 w-50 text-4xl inline-flex text-white active:text-gray-100  p-2 m-5 rounded-lg active:bg-opacity-75 transition active:scale-95"
                      : "SINGLE-NAVBAR-ITEM text-center text-4xl text-white w-50 inline-flex active:text-gray-100 bg-black bg-opacity-20 p-2 m-5 rounded-lg active:bg-opacity-40 transition active:scale-95"
                  }
                >
                  <p className="inline-flex pl-5">{m.icon}</p>
                  <p className="inline-flex px-5">{m.name}</p>
                </Link>
              );
            })
          ) : (
            <Link
              to="/settings/dev"
              className={
                location.pathname === "/settings/dev"
                  ? "SINGLE-NAVBAR-ITEM text-center bg-black bg-opacity-50 w-50 text-4xl inline-flex text-white active:text-gray-100  p-2 m-5 rounded-lg active:bg-opacity-75 transition active:scale-95"
                  : "SINGLE-NAVBAR-ITEM text-center text-4xl text-white w-50 inline-flex active:text-gray-100 bg-black bg-opacity-20 p-2 m-5 rounded-lg active:bg-opacity-40 transition active:scale-95"
              }
            >
              <BsCode className="text-emerald-400" />
              <p className="inline-flex px-5">Dev Mode</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
export default SettingsNav;
