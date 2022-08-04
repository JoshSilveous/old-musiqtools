import React from 'react';
import JSelect from './JForm'


export default function ScaleMenu() {
    interface Option { value: any, label: string; }
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
    ];

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

    console.log('currentLetter:', letteroptions[currentLetter].label, 'currentMode:', modeoptions[currentMode].label)
    return (
        <div className="scale-menu">

            {/*     Elements:
                        - Select Letter (Dropdown)          scale-menu__letter
                        - Select Mode (Dropdown)            scale-menu__mode
                        - Show Sharps or Flats (Toggle)     scale-menu__is-sharp
                                                            ...not sure if I even need class names for these yet
            */}


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
    )
}