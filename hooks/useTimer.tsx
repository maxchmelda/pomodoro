"use client"

import React from "react";
import type { Settings } from "@/hooks/useSettings";
import useSettings, { defaultSettings } from "@/hooks/useSettings";

type TimerState = {
    active: boolean;
    accumulatedSecs: number;
    ended: boolean;

    isBreak: boolean;
    untilNext: number;
    currentSession: number;
}

const initialTimerState: TimerState = {
    active: false,
    accumulatedSecs: 0,
    ended: false,

    isBreak: false,
    untilNext: 0,
    currentSession: 1,
}

export default function useTimer() {
    const { settings, updateSettingsItem } = useSettings();
    const [timerState, setTimerState] = React.useState<TimerState>(initialTimerState);
    const [lockedSettings, setLockedSettings] = React.useState<Settings>(defaultSettings);
    const [error, setError] = React.useState<string>("");
    
    
    React.useEffect(() => {
        if (timerState.active == false) return;
        
        const intervalId = setInterval(() => {
            setTimerState((prev) => ({
                ...prev,
                accumulatedSecs: prev.accumulatedSecs + 1 
            }))
        }, 1000)

        return () => clearInterval(intervalId);
    }, [timerState.active]);
    

    function startTimer() {
        if (settings.focusTimeMins <= 0) {

        } else if (settings.breakTimeMins <= 0) {

        } else if (settings.sessionCount <= 0) {
            
        }
        
        setTimerState({
            ...initialTimerState,
            active: true
        })
        setLockedSettings(settings);
    }

    function pauseTimer() {
        setTimerState((prev) => ({
            ...prev,
            active: !prev.active
        }));
    }

    function resetTimer() {
        setTimerState(initialTimerState);
    }

    React.useEffect(() => {

        // check if ended
        const ended = timerState.accumulatedSecs >= (lockedSettings.breakTimeMins + lockedSettings.focusTimeMins) * lockedSettings.sessionCount * 60;

        // check if it's break
        const fullTimeBlockSecs = (lockedSettings.breakTimeMins + lockedSettings.focusTimeMins) * 60;
        const currentPosSecs = timerState.accumulatedSecs % fullTimeBlockSecs;
        const isBreak = currentPosSecs >= lockedSettings.focusTimeMins * 60;
        
        // check how many secs left until next
        const currBlockSecs = isBreak ? lockedSettings.breakTimeMins * 60 : lockedSettings.focusTimeMins * 60;
        const posInBlock = isBreak ? (currentPosSecs - lockedSettings.focusTimeMins * 60) : currentPosSecs;
        const untilNext = currBlockSecs - posInBlock;

        // check current session number
        const currentSession = Math.floor(timerState.accumulatedSecs / fullTimeBlockSecs) + 1;

        // update timer state
        setTimerState((prev) => ({
            ...prev,
            ended,
            active: ended ? false : prev.active,
            isBreak,
            untilNext,
            currentSession
        }))
    }, [timerState.accumulatedSecs, lockedSettings])



    return { startTimer, pauseTimer, resetTimer, timerState, updateSettingsItem, settings }
}