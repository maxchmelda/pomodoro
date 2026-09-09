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
        if (val <= 0) val = defaultSettings[key];

        setSettings((prev) => ({...prev, [key]: val}));
    }

    return { settings, updateSettingsItem }
}