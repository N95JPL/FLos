import { FaCar, FaPhoneAlt, FaCog } from "react-icons/fa";
import { GiRadioTower } from "react-icons/gi";
import { BsSnow } from "react-icons/bs";
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { theme } from "../Stores/theme";
import { mediumSpeed } from "../Stores/mediumSpeed";
import "./Style.css";

function Layout() {
  const primaryColor = theme((state) => state.primaryColor);
  const primaryColorSet = "from-" + primaryColor + "-600";
  const secondaryColor = theme((state) => state.secondaryColor);
  const secondaryColorSet = "to-" + secondaryColor + "-600";
  const location = useLocation();
  const menuItems = [
    {
      name: "Climate",
      icon: <BsSnow />,
      path: "/",
    },
    {
      name: "Radio",
      icon: <GiRadioTower />,
      path: "/radio",
    },
    {
      name: "Carplay",
      icon: <FaPhoneAlt />,
      path: "/carplay",
    },
    {
      name: "Vehicle",
      icon: <FaCar />,
      path: "/vehicle",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/settings/app",
    },
  ];

  const hour = mediumSpeed((state) => state.hour);
  const minute = mediumSpeed((state) => state.minute);
  // const gradient = (primaryColorSet + " " + secondaryColorSet).toString();

  return (
    <>
      <div
        className={`NAVBAR-CONTAINER w-[13%] shadow-lg bg-gradient-to-br ${primaryColorSet} ${secondaryColorSet} inline-flex h-screen absolute z-10 left-0 transition`}
      >
        <div className="flex absolute justify-center items-center w-full">
          <p className="py-0.75 m-2 text-xl font-bold">
            {hour}:{minute}
          </p>
        </div>
        <div className="NAVBAR-ITEMS flex flex-col justify-between items-center py-10 w-full h-full">
          {menuItems.map((m) => {
            let x = location.pathname.split("/");
            let y = m.path.split("/");
            return (
              <Link
                to={m.path}
                className={
                  x[1] === y[1]
                    ? "SINGLE-NAVBAR-ITEM bg-black bg-opacity-50 text-4xl text-white active:text-gray-100 p-4 mx-5 rounded-lg active:bg-opacity-75 transition active:scale-95"
                    : "SINGLE-NAVBAR-ITEM text-4xl text-white active:text-gray-100 bg-black bg-opacity-20 p-4 mx-5 rounded-lg active:bg-opacity-40 transition active:scale-95"
                }
              >
                {m.icon}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="absolute w-[695px] left-[105px]">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
