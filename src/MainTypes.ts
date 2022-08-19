export type ScaleContextProviderProps = {
    children: JSX.Element | JSX.Element[]
}

export type scaleSettingsType = {
    scale: number,
    mode: number,
    isSharp: boolean
}

export type ScaleContextProviderType = {
    scaleNum: number[]
    scaleLet: string[]
    scaleSettings: scaleSettingsType,
    setScaleSettings: React.Dispatch<React.SetStateAction<scaleSettingsType>>,
    scaleLetOptions: string[],
    scaleModeOptions: string[]
}