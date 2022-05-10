import create from "zustand";

export let theme = create((set) => ({
  darkMode: false,
  setDarkMode: (darkMode) => set({ darkMode }),
  primaryColor: "sky",
  setPrimaryColor: (primaryColor) => set({ primaryColor }),
  secondaryColor: "pink",
  setSecondaryColor: (secondaryColor) => set({ secondaryColor }),
}));
