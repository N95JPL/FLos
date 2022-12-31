/* eslint-disable no-eval */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SettingsNav from "./Settings-Nav";
import "../Style.css";
import { FaCircle, FaFreeCodeCamp } from "react-icons/fa";
import { theme } from "../../Stores/theme";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControlLabel, FormGroup, Slider, Switch } from "@mui/material";
import { settings } from "../../Stores/settings";
import { CirclePicker } from "react-color";
var convert = require("color-convert");
let setTheme;
// eslint-disable-next-line no-unused-vars
function AppSettings() {
  const primaryColor = theme((state) => state.setPrimaryColor);
  const secondaryColor = theme((state) => state.setSecondaryColor);
  const [showModal, setShowModal] = React.useState(false);
  const [colorPicker, setColorPicker] = React.useState("to");
  const [colors, setColor] = React.useState([]);
  const colorName = [
    "skyblue",
    "blue",
    "green",
    "indigo",
    "lime",
    "orange",
    "pink",
    "purple",
    "red",
    "teal",
    "violet",
    "yellow",
  ];
  useEffect(() => {
    var temp = [];
    colorName.forEach((element) => {
      temp.push("#" + convert.keyword.hex(element));
    });
    setColor(temp);
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const brightnessOffset = settings((state) => state.brightnessOffset);
  const setBrightnessOffset = settings((state) => state.setBrightnessOffset);
  const brightnessAuto = settings((state) => state.brightnessAuto);
  const setBrightnessAuto = settings((state) => state.setBrightnessAuto);
  const modalStyle = {
    position: "absolute",
    top: "50%",
    "text-align": "center",
    align: "center",
    margin: "auto",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 300,
    bgcolor: "gray",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const updateBrightnessOffset = (e, data) => {
    setBrightnessOffset(data);
  };
  const updateBrightnessAuto = (e, data) => {
    setBrightnessAuto(data);
  };
  const updateColor = (color, event) => {
    var selectedColor = convert.hex.keyword(color.hex);
    if (selectedColor === "skyblue") {
      selectedColor = "sky";
    }
    if (colorPicker === "to") {
      primaryColor(selectedColor);
    } else {
      secondaryColor(selectedColor);
    }
  };
  useEffect(() => {
    window.api.actionBrightness({
      type: "brightness",
      auto: brightnessAuto,
      press: false,
      value: brightnessOffset,
    });
  }, [brightnessAuto, brightnessOffset]);
  return (
    <div className="flex h-screen w-[695px] justify-center absolute">
      <div className="flex h-10 w-full absolute">
        <SettingsNav />
      </div>
      <div className="fade-in w-full items-center justify-center p-10 gap-5 flex-col flex">
        <div className="flex flex-row gap-5 ">
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
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                defaultChecked={brightnessAuto}
                checked={brightnessAuto}
                onChange={updateBrightnessAuto}
              />
            }
            label="Automatic Dimming"
          />
        </FormGroup>
        <div className="w-[600px] left-[50px] top-[430px] place-self-center items-center justify-center absolute flex flex-col">
          <Slider
            sx={{
              "& .MuiSlider-thumb": {
                background: "linear-gradient(to right, black 50%, white 50%)",
                transform:
                  "rotateY(0deg) rotateX(0deg) rotateZ(45deg) translateX(-20px) ",
                height: 25,
                width: 25,
              },
            }}
            aria-label="Brightness"
            value={brightnessOffset}
            onChange={updateBrightnessOffset}
            min={5}
            max={32.5}
            defaultValue={brightnessOffset}
          />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Select a colour!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              align: "center",
              width: "600px",
              position: "absolute",
              left: "40px",
              Content: "center",
            }}
          >
            <CirclePicker
              width={"540px"}
              circleSize={65}
              circleSpacing={25}
              colors={colors}
              onChange={updateColor}
            />
          </Typography>
        </Box>
      </Modal>
      <div className="absolute left-[565px] top-[360px] gap-2.5">
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
