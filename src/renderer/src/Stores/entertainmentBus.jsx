import create from 'zustand'
import { persist } from 'zustand/middleware'
export let entertainmentBus = create(
  persist(
    (set) => ({
      mediaPhoneName: '',
      setMediaPhoneName: (mediaPhoneName) => set({ mediaPhoneName }),
      trackName: '',
      setTrackName: (trackName) => set({ trackName }),
      artistName: '',
      setArtistName: (artistName) => set({ artistName }),
      source: false,
      setSource: (source) => set({ source }),
      sourceSel: 0,
      setSourceSel: (sourceSel) => set({ sourceSel }),
      fmStation: 0,
      setFmStation: (fmStation) => set({ fmStation }),
      dabStation: 0,
      setDabStation: (dabStation) => set({ dabStation }),
      text: 0,
      setText: (text) => set({ text }),
      block: 0,
      setBlock: (block) => set({ block }),
      active: false,
      setActive: (active) => set({ active }),
      volume: 0,
      setVolume: (volume) => set({ volume }),
      volumeControl: 0,
      setVolumeControl: (volumeControl) => set({ volumeControl }),
      volumeChange: false,
      setVolumeChange: (volumeChange) => set({ volumeChange })
    }),
    {
      name: 'entertainmentBus'
    }
  )
)
