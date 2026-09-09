"use client"

import useSettings from '@/hooks/useSettings';
import useTimer from '@/hooks/useTimer';
import React from 'react'
import TimerSettings from './TimerSettings';



const PomoTimer = () => {
    const { 
        startTimer,
        pauseTimer,
        resetTimer,
        timerState,
        settings,
        updateSettingsItem
    } = useTimer();

  return (
    <div>
        {/* Clock */}
        

        {/* Start / Stop / Reset / Skip */}

        {/* Settings (Focus, break, sessions) */}
        <TimerSettings settings={settings} handleUpdate={updateSettingsItem} />
    </div>
  )
}

export default PomoTimer