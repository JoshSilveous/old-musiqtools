import React from 'react'



const { Provider, Consumer } = React.createContext<ScaleContextProviderType>({} as ScaleContextProviderType)


type ScaleContextProviderProps = {
    children: JSX.Element | JSX.Element[]
}

type scaleSettingsType = {
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

function ScaleContextProvider({ children }: ScaleContextProviderProps): JSX.Element {

    /*  Variables and Functions
        LOCAL
          * genScaleNum         Generates the numeric scale
          * genScaleLet         converts numeric scale to letters
          * scaleNum            stores the current scale in numeric format                      e.x. [2,4,6,7,9,11,0]
          * scaleLet            scaleNum in letter format                                       e.x. ['Bb', 'C', 'D']
          * scaleSettings       the current scale                                               e.x. {scale: 4, mode: 2, isSharp: true}
          * setScaleSettings()  changes the scale itself
          * scalemodeOptions         an array with all different modes. Exported for lists           e.x. ['Ionian', 'Dorian', ...]
                                    This is so more modes can be added later
        EXPORTING
            scaleNum, scaleLet, scaleSettings, setScaleSettings, modeOptions
    */


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