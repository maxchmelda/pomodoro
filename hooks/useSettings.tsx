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


    function updateSettingsItem(key: keyof Settings, val: number) {
        setSettings((prev) => ({...prev, [key]: val}));
        console.log(JSON.stringify(settings));
    }

    return { settings, updateSettingsItem }
}