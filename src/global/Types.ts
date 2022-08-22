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
export type ThemeValuesType = {
    background: string,
    text: string,
    accent1: string,
    accent2: string
}

export type ThemeType = {
    themeValues: ThemeValuesType,
    lightenedThemeValues: ThemeValuesType,
    setThemeValues: React.Dispatch<React.SetStateAction<ThemeValuesType>>
}

export type ScaleContextPropsType = {
    context: ScaleContextProviderType
}

export type ScaleThemePropsType = {
    theme: ThemeType
}