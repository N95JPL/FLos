# Jaguar XF - Infotainment System
## Work in progress
A Electron-React App to replace the Climate Control Module of my Jaguar XFS

Based off rhysmorgan134/jaguar-xf-canbus-app - Big shoutout to him for all his hard work and assistance!
### Install
1) Make sure RPi is running latest version
2) Install NodeJs: curl -sL https://deb.nodesource.com/setup_18.x | sudo bash -
3) Install NodeJS: sudo apt install nodejs
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
9) run `npm i -f` (Note the `-f` this is required due to a TailWind Extender Package issue.
    * Issue: This might fail, if it does, follow this: 
    * Cut SocketCan out of the dependancies in package.json
    * Run `npm i -f` again
    * Paste SocketCan back in to package.json
    * run `npm i-f` again
    * SUCCESS    
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
