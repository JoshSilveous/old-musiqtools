import React from 'react'
import { ScaleContextProviderProps, ScaleContextProviderType, scaleSettingsType } from './MainTypes'



const { Provider, Consumer } = React.createContext<ScaleContextProviderType>({} as ScaleContextProviderType)




function ScaleContextProvider({ children }: ScaleContextProviderProps): JSX.Element {

    const scaleDefaultSettings: scaleSettingsType = { scale: 4, mode: 0, isSharp: false }

    const [scaleSettings, setScaleSettings] = React.useState(scaleDefaultSettings)

    const scaleLetOptions = scaleSettings.isSharp ?
        ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'] :
        ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G']

    const scaleModeOptions =
        ['Ionian (Major)', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian (Minor)', 'Locrian']

    function genScaleNum() {

        let scaleFormula: number[] = []
        switch (scaleSettings.mode) {
            case 0: scaleFormula = [2, 2, 1, 2, 2, 2]; break
            case 1: scaleFormula = [2, 1, 2, 2, 2, 1]; break
            case 2: scaleFormula = [1, 2, 2, 2, 1, 2]; break
            case 3: scaleFormula = [2, 2, 2, 1, 2, 2]; break
            case 4: scaleFormula = [2, 2, 1, 2, 2, 1]; break
            case 5: scaleFormula = [2, 1, 2, 2, 1, 2]; break
            case 6: scaleFormula = [1, 2, 2, 1, 2, 2]; break
        }

        let scale = [scaleSettings.scale]
        scaleFormula.forEach(interval => {
            let nextScaleNum = scale[scale.length - 1] + interval
            if (nextScaleNum > 11) { nextScaleNum = nextScaleNum - 12 }
            scale.push(nextScaleNum)
        })
        return scale
    }
    const scaleNum = genScaleNum()

    function genScaleLet() {
        let scaleLetter: string[] = []
        scaleNum.forEach(scaleNumber => {
            scaleLetter.push(scaleLetOptions[scaleNumber])
        })
        return scaleLetter
    }
    const scaleLet = genScaleLet()

    return (
        <Provider value={
            {
                scaleNum,
                scaleLet,
                scaleSettings,
                setScaleSettings,
                scaleLetOptions,
                scaleModeOptions
            }
        }>
            {children}
        </Provider>
    )
}

export { ScaleContextProvider, Consumer as ScaleContextConsumer }