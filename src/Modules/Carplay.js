import React from "react";
import { Link } from "react-router-dom";

import "./Style.css";

function Carplay() {
  return (
    <div className="h-[100%] w-[100%] flex items-center justify-center p-10">
      <div className="max-w-4xl flex flex-col">
        <h1 className="text-2xl font-extrabold tracking-tight">CarPlay!</h1>
        <p className="text-sm mb-2.5">Lol, this will get done soon!</p>
        <Link to="/">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Carplay;
