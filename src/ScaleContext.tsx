import React from 'react'


const { Provider, Consumer } = React.createContext<ScaleContextProviderType>({ scaleLet: [], scaleNum: [] })


type ScaleContextProviderProps = {
    children: JSX.Element | JSX.Element[]
}

export type ScaleContextProviderType = {
    scaleLet: string[]
    scaleNum: number[]
}

function ScaleContextProvider({ children }: ScaleContextProviderProps): JSX.Element {

    /*  Variables and Functions
        LOCAL
            genScaleNum         Generates the numeric scale
            genScaleLet         converts numeric scale to letters
            scaleNum            stores the current scale in numeric format                      e.x. [2,4,6,7,9,11,0]
            scaleLet            scaleNum in letter format                                       e.x. ['Bb', 'C', 'D']
            scaleSettings       the current scale                                               e.x. {scale: 4, mode: 2, isSharp: true}
            setScaleSettings()  changes the scale itself
            modeOptions         an array with all different modes. Exported for lists           e.x. ['Ionian', 'Dorian', ...]
                                    This is so more modes can be added later
        EXPORTING
            scaleNum, scaleLet, scaleSettings, setScaleSettings, modeOptions
    */

    const letterList = [
        'Ab', 'A', ''
    ]

    return (
        <Provider value={
            { scaleLet: ["hello"], scaleNum: [1, 2, 3] }
        }>
            {children}
        </Provider>
    )
}

export { ScaleContextProvider, Consumer as ScaleContextConsumer }