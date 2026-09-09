import { Settings } from '@/hooks/useSettings'
import { TimerState } from '@/hooks/useTimer'
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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
        if (timerState.isBreak) {
            return lockedSettings.breakTimeMins * 60;
        }

        return lockedSettings.focusTimeMins * 60;
    }

    function getCurrentValue() {
        let blockSecs = lockedSettings.focusTimeMins * 60; 

        if (timerState.isBreak) {
            blockSecs = lockedSettings.breakTimeMins * 60;
        }

        return blockSecs - timerState.untilNext;
    }

    const progressStyles = buildStyles({
        strokeLinecap: 'round',
        pathTransitionDuration: 0.6,
        pathColor: timerState.isBreak ? 'rgba(255, 255, 255, 0.65)' : '#ffffff',
        trailColor: 'rgba(255, 255, 255, 0.08)',
        textColor: '#ffffff',
        textSize: '15px',
    });
    progressStyles.text = {
        ...progressStyles.text,
        fontWeight: 600,
    };

  return (
    <div className='mt-10 flex flex-col justify center items-center gap-4'>
        <div className='w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gray-500/10 border border-white/10 shadow-sm p-6'>
            <CircularProgressbar
                className='w-full h-full'
                value={getCurrentValue()}
                maxValue={getMaxValue()}
                text={getTime()}
                strokeWidth={5}
                styles={progressStyles}
            />
        </div>
        <span className='text-white/70 text-sm'>{`Session ${timerState.currentSession} of ${lockedSettings.sessionCount}`}</span>
    </div>
  )
}

export default Clock