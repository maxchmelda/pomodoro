"use client"

import React from "react";
import type { Settings } from "@/hooks/useSettings";
import useSettings, { defaultSettings } from "@/hooks/useSettings";

export type TimerState = {
    started: boolean;
    active: boolean;
    accumulatedSecs: number;
    ended: boolean;

    isBreak: boolean;
    untilNext: number;
    currentSession: number;
}

const initialTimerState: TimerState = {
    started: false,
    active: false,
    accumulatedSecs: 0,
    ended: false,

    isBreak: false,
    untilNext: defaultSettings.focusTimeMins * 60,
    currentSession: 1,
}

export default function useTimer() {
    const { settings, updateSettingsItem } = useSettings();
    const [timerState, setTimerState] = React.useState<TimerState>(initialTimerState);
    const [lockedSettings, setLockedSettings] = React.useState<Settings>(defaultSettings);

    const doneSoundRef = React.useRef<HTMLAudioElement | null>(null);
    const sessionSoundRef = React.useRef<HTMLAudioElement | null>(null);
    const breakSoundRef = React.useRef<HTMLAudioElement | null>(null);

    React.useEffect(() => {
        doneSoundRef.current = new Audio('/sounds/timer_finish.mp3');
        sessionSoundRef.current = new Audio('/sounds/session_start.mp3');
        breakSoundRef.current = new Audio('/sounds/break_start.mp3');
    }, []);

    React.useEffect(() => {
        if (!timerState.ended) return;
        doneSoundRef.current?.play().catch(() => {});
    }, [timerState.ended]);

    React.useEffect(() => {
        if (!timerState.active) return;
        if (timerState.isBreak) {
            breakSoundRef.current?.play().catch(() => {});
        } else {
            sessionSoundRef.current?.play().catch(() => {});
        }
    }, [timerState.isBreak]);
    
    React.useEffect(() => {
        if (!timerState.active) {
            document.title = "Pomodoro Timer";
            return;
        }

        const mins = Math.floor(timerState.untilNext / 60);
        const secs = timerState.untilNext % 60;
        const time = `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
        document.title = `${time} · ${timerState.isBreak ? "Break" : "Focus"}`;
    }, [timerState.active, timerState.untilNext, timerState.isBreak]);

    React.useEffect(() => {
        return () => {
            document.title = "Pomodoro Timer";
        };
    }, []);

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
        setTimerState({
            ...initialTimerState,
            active: true,
            started: true,
        })
        setLockedSettings(settings);
        sessionSoundRef.current?.play().catch(() => {});
    }

    function pauseTimer() {
        setTimerState((prev) => ({
            ...prev,
            active: !prev.active
        }));
    }

    function resetTimer() {
        setTimerState({
            ...initialTimerState,
            untilNext: lockedSettings.focusTimeMins * 60,
        });
    }

    function skipStage() {
        setTimerState((prev) => ({
            ...prev,
            accumulatedSecs: prev.accumulatedSecs + prev.untilNext
        }));
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
            started: ended ? false : prev.started,
            isBreak,
            untilNext,
            currentSession
        }))
    }, [timerState.accumulatedSecs, lockedSettings])



    return { startTimer, pauseTimer, resetTimer, timerState, updateSettingsItem, settings, lockedSettings, skipStage }
}