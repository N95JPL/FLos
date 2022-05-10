import React from "react";
import { FaCircle } from "react-icons/fa";
import { theme } from "../Stores/theme";
// I dont know if this helps, but app-outlet is defiend in CSS
let setTheme;

function Vehicle() {
  setTheme = theme();
  return (
    <div className="h-screen flex items-center justify-center p-10">
      <div className="max-w-4xl w-full flex flex-col">
        <div>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              Vehicle Information
            </h1>
            <p className="text-sm mb-2.5">Lol, this will get done soon!</p>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 mt-2.5">
          <div className="flex gap-2.5"></div>
        </div>
      </div>
    </div>
  );
}
export default Vehicle;
