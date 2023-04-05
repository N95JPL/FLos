/* eslint-disable prefer-const */
let entertainmentBus = {
  source: 0,
  sourceSel: 0,
  fmStation: 0,
  dabStation: 0,
  text: 0,
  block: 0,
  active: false,
  volume: 0,
  volumeControl: 0, // Timeout
  volumeChange: false,
};
exports.entertainmentBus = entertainmentBus;

let entertainmentBusPrev = {
  source: 0,
  sourceSel: 0,
  fmStation: 0,
  dabStation: 0,
  text: 0,
  block: 0,
  active: false,
  volume: 0,
  volumeControl: 0,
  volumeChange: false,
};
exports.entertainmentBusPrev = entertainmentBusPrev;
