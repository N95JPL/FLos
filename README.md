# Land Rover Freelander 2 > 2012 - Infotainment System

## Work in progress

A Electron-Vite-React App to one day replace the Infotainment Module of my Freelander 2!

### Features

    - Decode IDs from the Medium Speed Can-Bus network
        - Work in progress
        - VIN Decoding
            - Parse the VIN and decode the age/make/model of the vehicle
            - The first time the app launches, this will take a moment to configure
    - Decode IDs from the "Entertainment Bus"
        - The special bus between the "Audio Head Unit" and the Headunit Display
        - Decipher Radio Source (FM/DAB/AM/Aux/BT/[CD Pending])
        - Radio Station Name + Additional RDS Data
        - Volume Level (Pops up when using the cars original hardware rotary switch)
        - Bluetooth Media Song Title/Artist
    - Personalise the theme settings
    - Create a CanDump from the vehicles MS/HS CanBus (used for debugging and development)

### Upcoming Features

    - Apple CarPlay/Android Auto integration
    - Car Configuration File parsing
        - ~~The app will then only show options relevent to the current vehicle~~ TBC .. Is it needed?
    - Bluetooth connection
        - Notifications
        - Music

### Install

1. Make sure RPi is running latest version
2. Install NodeJs: This has only been tested on the latest 20.10.0
3. Install CanUtils: sudo apt-get -y install can-utils libsocketcan2 libsocketcan-dev
4. Modify /boot/config.txt to include

   - CAN bus controllers

   ```
   dtparam=spi=on
   dtoverlay=mcp2515-can1,oscillator=16000000,interrupt=25
   dtoverlay=mcp2515-can0,oscillator=16000000,interrupt=23
   ```

5. Modify /etc/rc.local to include the next lines **BEFORE** "exit 0"

   ```
   sudo /sbin/ip link set can1 up type can bitrate 500000
   sudo /sbin/ip link set can0 up type can bitrate 125000
   ```

6. Reboot Pi
7. Download FLos Repo
8. run `npm i`
9. Run `npm run` + either
   - pi64-build - For RPi 4 - 4GB+ (npm run pi64-build)
   - pi32-build - For Rpi 3 or Rpi 4 < 4GB (npm run pi32-build)
   - electron-build - For Ubuntu (Testing ONLY) (`npm run electron-build`)
     - This requires an additional step, see below
10. Locate the `/dist` folder and run the .AppImage

## Local Host vCAN for Testing

`sudo /sbin/ip link set can1 down`

`sudo /sbin/ip link set can1 up type can bitrate 125000`

Can also be tested on Ubuntu by running the same commands above but this needs to be ran before loading AppImage:
(Can be copied and pasted in one go)

```
sudo modprobe vcan && sudo ip link add dev can0 type vcan && sudo ip link add dev can1 type vcan && sudo ip link set up can0 && sudo ip link set up can1 && sudo modprobe can-gw && sudo cangw -A -s can0 -d can1 -e && sudo cangw -A -s can1 -d can0 -e
```
