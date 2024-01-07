/* eslint-disable no-eval */
import SettingsNav from './Settings-Nav'

import '../Style.css'
import { FaCircle } from 'react-icons/fa'
import appInfo from '../../Stores/appInfo'

// eslint-disable-next-line no-unused-vars
export function Dev() {
  const msRecording = appInfo((state) => state.msRecording)
  const hsRecording = appInfo((state) => state.hsRecording)
  const setmsRecording = appInfo((state) => state.setmsRecording)
  const sethsRecording = appInfo((state) => state.sethsRecording)
  return (
    <div className="absolute h-[100%] w-[90%] left-[10%]">
      <div className="w-full">
        <SettingsNav />
      </div>
      <div className="fade-in h-full flex w-full items-center justify-center p-10">
        <div className="max-w-4xl w-full flex flex-col">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">Debug Information</h1>
            <p className="text-sm mb-2.5">
              Basic stuff... be warned, leave this for too long... and the files are HUGE!
            </p>
          </div>
          <div className="flex flex-col items-center gap-2.5 mt-2.5">
            <div className="flex gap-2.5">
              {!hsRecording ? (
                <button
                  className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
                  onClick={() => [window.api.canRecorder('startHS'), sethsRecording(true)]}
                >
                  <FaCircle className="text-emerald-400" /> Start Ent. Speed Logging
                </button>
              ) : (
                <button
                  className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
                  onClick={() => [window.api.canRecorder('endHS'), sethsRecording(false)]}
                >
                  <FaCircle className="text-emerald-400" /> Stop Ent. Speed Logging
                </button>
              )}
            </div>
            <div className="flex gap-2.5">
              {!msRecording ? (
                <button
                  className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
                  onClick={() => [window.api.canRecorder('startMS'), setmsRecording(true)]}
                >
                  <FaCircle className="text-yellow-400" /> Start Medium Speed Logging
                </button>
              ) : (
                <button
                  className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
                  onClick={() => [window.api.canRecorder('endMS'), setmsRecording(false)]}
                >
                  <FaCircle className="text-yellow-400" /> Stop Medium Speed Logging
                </button>
              )}
            </div>
            <button
              className="flex gap-1.5 items-center bg-black bg-opacity-20 active:bg-opacity-40 transition px-3.5 py-2 rounded-lg"
              onClick={() => window.api.close('')}
            >
              <FaCircle className="text-red-400" /> Close APP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dev
