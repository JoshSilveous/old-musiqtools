export type ScaleContextProviderProps = {
    children: JSX.Element | JSX.Element[]
}

export type scaleSettingsType = {
    tonic: number,
    mode: number,
    isSharp: boolean
}

export type UseScaleType = {
    scaleNum: number[]
    scaleLet: string[]
    scaleSettings: scaleSettingsType,
    setScaleSettings: React.Dispatch<React.SetStateAction<scaleSettingsType>>,
    scaleLetOptions: string[],
    scaleModeOptions: string[],
    highlightedNotes: boolean[],
    setHighlightedNotes: React.Dispatch<React.SetStateAction<boolean[]>>
}


export type ScaleStatePropsType = {
    scaleState: UseScaleType
}
