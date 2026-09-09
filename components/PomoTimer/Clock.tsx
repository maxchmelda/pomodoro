import { Settings } from '@/hooks/useSettings'
import { TimerState } from '@/hooks/useTimer'
import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Clock = ({ settings, lockedSettings, timerState } : { settings: Settings, lockedSettings: Settings, timerState: TimerState }) => {
    function formatTime (totalSecs: number) {
        const mins = Math.floor(totalSecs / 60);
        const secs = totalSecs % 60;
        
        const time = `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
        return time;
    }

    function getTime() {
        if (!timerState.started) return formatTime(settings.focusTimeMins*60);
        return formatTime(timerState.untilNext);
    }

    function getMaxValue() {
        if (!timerState.started) return 0;

        if (timerState.isBreak) {
            return lockedSettings.breakTimeMins * 60;
        }

        return lockedSettings.focusTimeMins * 60;
    }

    function getCurrentValue() {
        if (!timerState.started) return 0;

        let blockSecs = lockedSettings.focusTimeMins * 60; 

        if (timerState.isBreak) {
            blockSecs = lockedSettings.breakTimeMins * 60;
        }

        return blockSecs - timerState.untilNext;
    }

  return (
    <div className='mb-4 mt-10'>
        <CircularProgressbar 
            className='w-80 h-80'
            value={getCurrentValue()}
            maxValue={getMaxValue()} 
            text={getTime()} 
        />
    </div>
  )
}

export default Clock