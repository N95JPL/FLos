/* eslint-disable no-eval */
import React from "react";
import { Link } from "react-router-dom";
import SettingsNav from "./Settings-Nav";
import "../Style.css";
import { FaCircle, FaFreeCodeCamp } from "react-icons/fa";
import { theme } from "../../Stores/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

let setTheme;
// eslint-disable-next-line no-unused-vars
function AppSettings() {
  setTheme = theme();
  const [showModal, setShowModal] = React.useState(false);
  const [colorPicker, setColorPicker] = React.useState("to");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex h-screen w-[695px] justify-center absolute">
      <div className="flex h-10 w-full absolute">
        <SettingsNav />
      </div>
      <div className="flex absolute top-24 flex-col">
        <div className="flex gap-2.5">
          <button
            className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
            onClick={() => [handleOpen(), setColorPicker("to")]}
          >
            <FaCircle className="text-emerald-400" /> "To" Color
          </button>
          <button
            className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
            onClick={() => [handleOpen(), setColorPicker("from")]}
          >
            <FaCircle className="text-emerald-400" /> "From" Color
          </button>
        </div>
      </div>
      <div className="flex items-center justify-evenly p-10">
        <div className="max-w-4xl w-full flex flex-col"></div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className=" transition-all absolute text-center top-1/4 translate-x-2/4 h-[240px] w-[400px] bg-slate-500 border-2 border-sky-600 shadow-md p-4">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please select a colour!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <div className="absolute left-[565px] top-[410px] gap-2.5">
        <Link
          to="/settings/dev"
          className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
        >
          <FaFreeCodeCamp className="text-emerald-400" />
          <p className="inline-flex px-5">Dev</p>
        </Link>
      </div>
    </div>
  );
}
export default AppSettings;
