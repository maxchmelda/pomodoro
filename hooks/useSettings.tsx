"use client"

import React from "react"

export type Settings = {
    focusTimeMins: number;
    breakTimeMins: number;
    sessionCount: number;
}

export const defaultSettings: Settings = {
    focusTimeMins: 25,
    breakTimeMins: 5,
    sessionCount: 4
}

export default function useSettings() {
    const [settings, setSettings] = React.useState<Settings>(defaultSettings);
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);


    function updateSettingsItem(key: keyof Settings, val: number) {
        setSettings((prev) => ({...prev, [key]: val}));
    }

    function getFromStorage () {
        const raw = localStorage.getItem('pomo-settings');
        if (!raw) return defaultSettings;

        const savedSettings = JSON.parse(raw);
        return savedSettings;
    }

    function saveToStorage() {
        localStorage.setItem('pomo-settings', JSON.stringify(settings));
    }

    React.useEffect(() => {
        setSettings(getFromStorage());
        setIsLoaded(true);
    }, [])

    React.useEffect(() => {
        if (!isLoaded) return;
        saveToStorage();
    }, [settings])

    return { settings, updateSettingsItem }
}