"use client"

import useSettings from '@/hooks/useSettings';
import useTimer from '@/hooks/useTimer';
import React from 'react'
import TimerSettings from './TimerSettings';
import ControlButtons from './ControlButtons';
import Clock from './Clock';



const PomoTimer = () => {
    const { 
        startTimer,
        pauseTimer,
        resetTimer,
        timerState,
        settings,
        updateSettingsItem,
        lockedSettings,
        skipStage
    } = useTimer();

  return (
    <div className='flex flex-col items-center justify-start gap-6'>
        {/* Clock */}
        <Clock settings={settings} lockedSettings={lockedSettings} timerState={timerState} />

        {/* Start / Stop / Reset / Skip */}
        <ControlButtons start={startTimer} toggle={pauseTimer} reset={resetTimer} skip={skipStage} timerState={timerState} />

        {/* Settings (Focus, break, sessions) */}
        <TimerSettings settings={settings} handleUpdate={updateSettingsItem} />
    </div>
  )
}

export default PomoTimer