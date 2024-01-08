import { Link } from "react-router-dom";
import { theme } from "../Stores/theme";

import "./Style.css";

export function Carplay() {
  const textColor = theme((state) => state.textColor);
  //console.log(textColor)

  //Debugging
  //const Tc = theme((state) => state.textColor);
  //console.log(Tc)

  return (
    <div
      className="h-[100%] w-[100%] flex items-center justify-center p-10"
      style={{ color: textColor }}
    >
      <div className="max-w-4xl flex flex-col">
        <h1
          className="text-2xl font-extrabold tracking-tight"
          style={{ color: textColor }}
        >
          CarPlay!
        </h1>
        <p className="text-sm mb-2.5">Lol, this will get done soon!</p>
        <Link to="/">
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded-md"
            style={{ color: textColor }}
          >
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
}
export default Carplay;
