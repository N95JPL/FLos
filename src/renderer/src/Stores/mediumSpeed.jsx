import create from "zustand";
import { persist } from "zustand/middleware";

export let mediumSpeed = create(
	persist(
		(set) => ({
			// Time state and setters
			day: 0,
			setDay: (day) => set({ day }),
			month: 0,
			setMonth: (month) => set({ month }),
			year: 0,
			setYear: (year) => set({ year }),
			hour: 0,
			setHour: (hour) => set({ hour }),
			minute: 0,
			setMinute: (minute) => set({ minute }),
			second: 0,
			setSecond: (second) => set({ second }),

			// Temperature state and setters
			interior: 0,
			setInterior: (interior) => set({ interior }),
			exterior: 0,
			setExterior: (exterior) => set({ exterior }),
			coolant: 0,
			setCoolant: (coolant) => set({ coolant }),

			// Brightness state and setters
			brightness: 0,
			setBrightness: (brightness) => set({ brightness }),
			offset: 20,
			setOffset: (offset) => set({ offset }),
			auto: true,
			setAuto: (auto) => set({ auto }),
			adjustedBrightness: 255,
			setAdjustedBrightness: (adjustedBrightness) => set({ adjustedBrightness }),

			// Vehicle state and setters
			speed: 0,
			setSpeed: (speed) => set({ speed }),
			fuel: 0,
			setFuel: (fuel) => set({ fuel }),
			gear: 0,
			setGear: (gear) => set({ gear }),
			alternator: 0,
			setAlternator: (alternator) => set({ alternator }),
			voltage: 0,
			setVoltage: (voltage) => set({ voltage }),
			charging_current: 0,
			setCharging_current: (charging_current) => set({ charging_current }),

			// Parking state and setters
			frontLeft: 0,
			setFrontLeft: (frontLeft) => set({ frontLeft }),
			frontLeftMiddle: 0,
			setFrontLeftMiddle: (frontLeftMiddle) => set({ frontLeftMiddle }),
			frontRightMiddle: 0,
			setFrontRightMiddle: (frontRightMiddle) => set({ frontRightMiddle }),
			frontRight: 0,
			setFrontRight: (frontRight) => set({ frontRight }),
			rearLeft: 0,
			setRearLeft: (rearLeft) => set({ rearLeft }),
			rearLeftMiddle: 0,
			setRearLeftMiddle: (rearLeftMiddle) => set({ rearLeftMiddle }),
			rearRightMiddle: 0,
			setRearRightMiddle: (rearRightMiddle) => set({ rearRightMiddle }),
			rearRight: 0,
			setRearRight: (rearRight) => set({ rearRight }),
			active: false,
			setActive: (active) => set({ active }),
		}),
		{
			name: "mediumSpeed",
		}
	)
);
