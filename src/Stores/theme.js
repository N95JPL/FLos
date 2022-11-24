import create from "zustand";
import { persist } from 'zustand/middleware';
export let theme = create(
  persist(
    (set) => ({
      darkMode: false,
      setDarkMode: (darkMode) => set({ darkMode }),
      primaryColor: "sky",
      setPrimaryColor: (primaryColor) => set({ primaryColor }),
      secondaryColor: "pink",
      setSecondaryColor: (secondaryColor) => set({ secondaryColor }),
    }),
    {
      name: 'theme'
    }
  )
);
