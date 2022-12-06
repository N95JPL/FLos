import { FaCar, FaPhoneAlt, FaCog } from "react-icons/fa";
import { GiRadioTower } from "react-icons/gi";
import { BsSnow } from "react-icons/bs";
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { theme } from "../Stores/theme";
import { mediumSpeed } from "../Stores/mediumSpeed";
import { vehicleInfo } from "../Stores/vehicleInfo";
import "./Style.css";

function Layout() {
  const firstTimeSetup = vehicleInfo((state) => state.firstTimeSetup);
  // const gradient = (primaryColorSet + " " + secondaryColorSet).toString();

  if (firstTimeSetup) {
    return <FirstTimeSetup />;
  } else {
    return <Nav />;
  }
}
export default Layout;

function Nav() {
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
  return (
    <>
      <div
        className={`NAVBAR-CONTAINER w-[13%] fade-in shadow-lg bg-gradient-to-br ${primaryColorSet} ${secondaryColorSet} inline-flex h-screen absolute z-10 left-0 transition`}
      >
        <div className="flex absolute justify-center items-center w-full">
          <div className="py-0.75 m-2 text-xl font-bold">
            {hour}:{minute}
          </div>
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
window.api.onFadeOut((event, msg) => {
  var element = document.getElementById("firstTime");
  element.classList.add("fadeOut");
  element.classList.remove("fadeIn");
});
function FirstTimeSetup() {
  const setupInfoLine = vehicleInfo((state) => state.setupInfoLine);
  const setupStep = vehicleInfo((state) => state.setupStep);
  const VIN = vehicleInfo((state) => state.VIN);
  const Model_id = vehicleInfo((state) => state.Model_id);
  const Brand = vehicleInfo((state) => state.Brand);
  const Model = vehicleInfo((state) => state.Model);
  const ModelName = vehicleInfo((state) => state.ModelName);
  const Market = vehicleInfo((state) => state.Market);
  const BodyStyle = vehicleInfo((state) => state.BodyStyle);
  const Trim = vehicleInfo((state) => state.Trim);
  const Emission = vehicleInfo((state) => state.Emission);
  const ModelYear = vehicleInfo((state) => state.ModelYear);
  const Plant = vehicleInfo((state) => state.Plant);
  const Driver = vehicleInfo((state) => state.Driver);
  const Transmission = vehicleInfo((state) => state.Transmission);
  const Engine = vehicleInfo((state) => state.Engine);

  return (
    <>
      <div
        id="firstTime"
        className="firstTime h-screen fade-in setup w-screen fixed items-center justify-center p-10"
      >
        <div className="setup fade-in w-full h-[25%] text-5xl flex items-center justify-center p-10">
          <div>First Time Setup</div>
        </div>
        <div className="w-full h-[50%] flex items-center justify-center p-10">
          <img
            id="img"
            className="img transition fadeIn"
            src={require("../Images/JaguarLogo.png")}
          />
        </div>
        <div
          id="InfoBar"
          className="setup fade-in w-full h-[25%] flex items-center flex-col justify-center p-10"
        >
          <div className="flex">{setupInfoLine}</div>
          {ModelYear != "-" &&
          Brand != "-" &&
          ModelName != "-" &&
          Trim != "-" &&
          Model != "-" ? (
            <div className="flex">
              {ModelYear} {Brand} {ModelName} {Trim} ({Model})
            </div>
          ) : null}
          {VIN != "-" ? <div className="flex">VIN: {VIN} </div> : null}
        </div>
      </div>
    </>
  );
}
