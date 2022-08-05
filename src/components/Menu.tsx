import React from 'react'
import JSelect from './JForm'
import { JCheckbox } from './JForm'


export default function ScaleMenu() {
    interface Option { value: any, label: string }
    const letteroptions: Option[] = [
        { value: 0, label: 'Ab' },
        { value: 1, label: 'A' },
        { value: 2, label: 'Bb' },
        { value: 3, label: 'B' },
        { value: 4, label: 'C' },
        { value: 5, label: 'Db' },
        { value: 6, label: 'D' },
        { value: 7, label: 'Eb' },
        { value: 8, label: 'E' },
        { value: 9, label: 'F' },
        { value: 10, label: 'Gb' },
        { value: 11, label: 'G' }
    ]

    const modeoptions: Option[] = [
        { value: 0, label: 'Ionian (Major)' },
        { value: 1, label: 'Dorian' },
        { value: 2, label: 'Phrygian' },
        { value: 3, label: 'Lydian' },
        { value: 4, label: 'Mixolydian' },
        { value: 5, label: 'Aeolian (Minor)' },
        { value: 6, label: 'Locrian' }
    ]

    const [currentLetter, setCurrentLetter] = React.useState(4)
    const [currentMode, setCurrentMode] = React.useState(0)

    const [temporaryIsSharp, setTemporaryIsSharp] = React.useState(false)

    console.log('currentLetter:', letteroptions[currentLetter].label, 'currentMode:', modeoptions[currentMode].label, 'isSharp:', temporaryIsSharp)
    return (
        <div className="issharp-and-scale-menus">
            <div className="issharp-menu">
                Display Sharps (#) instead of Flats (b)?
                <div className="issharp-menu__checkbox-container">
                    <JCheckbox
                        defaultState={false}
                        primaryColor='#87c6bb'
                        backgroundColor='#2c3f43'
                        returnFunction={(value: boolean) => setTemporaryIsSharp(value)}
                    />
                </div>
            </div>
            <div className="scale-menu">
                Scale:
                <JSelect
                    options={letteroptions}
                    defaultIndex={4}
                    primaryColor='#87c6bb'
                    textColor='#2c3f43'
                    width='70px'
                    returnFunction={(value: number) => setCurrentLetter(value)}
                />
                <JSelect
                    options={modeoptions}
                    defaultIndex={0}
                    primaryColor='#e16853'
                    textColor='#2c3f43'
                    width='180px'
                    returnFunction={(value: number) => setCurrentMode(value)}
                />

            </div>
        </div>
    )
}