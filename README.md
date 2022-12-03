# Jaguar XF - Infotainment System
## Work in progress
A Electron-React App to one day replace the Infotainment Module of my Jaguar XFS!
### Features
    - Decode multiple IDs from the Medium Speed Can-Bus network
        - Climate (Driver/Pass Temperature, Interior Temp, Heated Screens etc)
            - It can also manipulate them like the lower button panel
            - The heated seat buttons dont work yet, additional hardware needed!
        - VIN Decoding
            - Parse the VIN and decode the age/make/model of the vehicle
            - The first time the app launches, this will take a moment to configure
        - Vehicle Settings
            - These are currently read-only
    - Personalise the theme settings
    - Create a CanDump from the vehicles MS/HS CanBus (used for debugging and development)

### Upcoming Features
    - Apple CarPlay integration
    - Car Configuration File parsing
        - The app will then only show options relevent to the current vehicle
    - Radio/Multimedia
    - Bluetooth connection
        - Notifications
        - Music

Based off rhysmorgan134/jaguar-xf-canbus-app - Big shoutout to him for all his hard work and assistance!
### Install
1) Make sure RPi is running latest version
2) Install NodeJs: This has only been tested on the latest 19.2.0
4) Install CanUtils: sudo apt-get -y install can-utils libsocketcan2 libsocketcan-dev
5) Modify /boot/config.txt to include
    * CAN bus controllers
    ```
    dtparam=spi=on
    dtoverlay=mcp2515-can1,oscillator=16000000,interrupt=25
    dtoverlay=mcp2515-can0,oscillator=16000000,interrupt=23
    ```
6) Modify /etc/rc.local to include the next lines **BEFORE** "exit 0"
    ```
    sudo /sbin/ip link set can1 up type can bitrate 500000
    sudo /sbin/ip link set can0 up type can bitrate 125000
    ```
7) Reboot Pi
8) Download JagOS Repo
9) run `npm i`    
10) Run `npm run` + either
    * pi64-build - For RPi 4 - 4GB+ (npm run pi64-build)
    * pi32-build - For Rpi 3 or Rpi 4 < 4GB (npm run pi32-build)
    * electron-build - For Ubuntu (Testing ONLY) (`npm run electron-build`)  
        * This requires an additional step, see below        
11) Locate the `/dist` folder and run the .AppImage

## Local Host vCAN for Testing

`sudo /sbin/ip link set can1 down`

`sudo /sbin/ip link set can1 up type can bitrate 125000`

Can also be tested on Ubuntu by running the same commands above but this needs to be ran before loading AppImage:
(Can be copied and pasted in one go)
```
sudo modprobe vcan && sudo ip link add dev can0 type vcan && sudo ip link add dev can1 type vcan
&& sudo ip link set up can0 && sudo ip link set up can1 && sudo modprobe can-gw
&& sudo cangw -A -s can0 -d can1 -e && sudo cangw -A -s can1 -d can0 -e
```
