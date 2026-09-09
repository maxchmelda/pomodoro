import { defaultSettings, Settings } from '@/hooks/useSettings'
import React from 'react'
import { FaCoffee } from 'react-icons/fa'
import { RiFocusFill, RiFocusLine } from 'react-icons/ri'
import { TiCoffee } from 'react-icons/ti'

const TimerSettings = ({ settings, handleUpdate } : { settings: Settings, handleUpdate: (key: keyof Settings, val: number) => void }) => {
  
  
  
  return (
    <div className='flex justify-center items-center gap-2'>
        {/* Focus */}
        <div className='text-white px-3 py-1.5 border border-white/10 rounded-2xl shadow-sm bg-gray-500/20 flex justify-center gap-2 items-center'>
            <RiFocusFill className='text-white size-4 cursor-default' />
            <span className='text-sm text-gray-400 cursor-default'>focus</span>
            <input
                type='text'
                inputMode='numeric'
                className='numericBaldInput w-6 outline-none text-white text-center font-semibold'
                value={settings.focusTimeMins == 0 ? "" : settings.focusTimeMins}
                onChange={(e) => {
                    const digitsOnly = e.target.value.replace(/[^0-9]/g, "");
                    handleUpdate("focusTimeMins", digitsOnly === "" ? 0 : Number(digitsOnly));
                }}
                onBlur={(e) => {
                    if (e.target.value == "") {
                        handleUpdate("focusTimeMins", defaultSettings.focusTimeMins);
                    }
                }}
            />
            <span className='text-sm text-gray-400 cursor-default'>min</span>
        </div>

        {/* Break */}
        <div className='text-white px-3 py-1.5 border border-white/10 rounded-2xl shadow-sm bg-gray-500/20 flex justify-center gap-2 items-center'>
            <FaCoffee className='text-white size-4 cursor-default' />
            <span className='text-sm text-gray-400 cursor-default'>break</span>
            <input
                type='text'
                inputMode='numeric'
                className='numericBaldInput w-6 outline-none text-white text-center font-semibold'
                value={settings.breakTimeMins == 0 ? "" : settings.breakTimeMins}
                onChange={(e) => {
                    const digitsOnly = e.target.value.replace(/[^0-9]/g, "");
                    handleUpdate("breakTimeMins", digitsOnly === "" ? 0 : Number(digitsOnly));
                }}
                onBlur={(e) => {
                    if (e.target.value == "") {
                        handleUpdate("breakTimeMins", defaultSettings.breakTimeMins);
                    }
                }}
            />
            <span className='text-sm text-gray-400 cursor-default'>min</span>
        </div>

        {/* Sessions */}
        <div className='text-white px-3 py-1.5 border border-white/10 rounded-2xl shadow-sm bg-gray-500/20 flex justify-center gap-2 items-center'>
            <FaCoffee className='text-white size-4 cursor-default' />
            <span className='text-sm text-gray-400 cursor-default'>sessions</span>
            <input
                type='text'
                inputMode='numeric'
                className='numericBaldInput w-6 outline-none text-white text-center font-semibold'
                value={settings.sessionCount == 0 ? "" : settings.sessionCount}
                onChange={(e) => {
                    const digitsOnly = e.target.value.replace(/[^0-9]/g, "");
                    handleUpdate("sessionCount", digitsOnly === "" ? 0 : Number(digitsOnly));
                }}
                onBlur={(e) => {
                    if (e.target.value == "") {
                        handleUpdate("sessionCount", defaultSettings.sessionCount);
                    }
                }}
            />
        </div>
    </div>
  )
}

export default TimerSettings