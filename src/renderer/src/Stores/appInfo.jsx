import create from 'zustand'

export const appInfo = create((set) => ({
  msRecording: false,
  setmsRecording: (msRecording) => set({ msRecording }),
  hsRecording: false,
  sethsRecording: (hsRecording) => set({ hsRecording })
}))

export default appInfo
