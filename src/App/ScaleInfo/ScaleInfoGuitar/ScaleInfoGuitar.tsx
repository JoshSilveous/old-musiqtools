import React from 'react';
import { ScaleStatePropsType } from '../../../global/Types';

export default function ScaleInfoGuitar({ scaleState }: ScaleStatePropsType) {


    const tonicNoteArray = [8, 3, 11, 6, 1, 8]
    const noteArray = tonicNoteArray.map(item => {
        let stringNotes = [item]
        for (let i = 0; i < 12; i++) {
            stringNotes[stringNotes.length - 1] >= 11 ?
                stringNotes.push(stringNotes[stringNotes.length - 1] - 11) :
                stringNotes.push(stringNotes[stringNotes.length - 1] + 1)
        }
        return stringNotes
    })

    const fretboardDisplay = noteArray.map((string, stringIndex) => {

        const fretsDisplay = string.map((fret, fretIndex) => {
            const included = scaleState.scaleNum.includes(fret)

            let backgroundColor = 'var(--background3)'
            let textColor = 'var(--text)'
            if (fret === scaleState.scaleNum[0]) {
                backgroundColor = 'var(--accent1)'
                textColor = 'var(--background2)'
            }



            return (
                <div className="fretcontainer">
                    {included ?
                        <div className="fret" style={{
                            backgroundColor: backgroundColor,
                            color: textColor,
                        }}>
                            {scaleState.scaleLetOptions[fret]}
                        </div> :
                        ''}
                </div>
            )
        })

        return (
            <div key={stringIndex} className="string">
                {fretsDisplay}
            </div>
        )
    })

    return (
        <div className="scale-info__guitar-container">
            <div className="fretboard">
                {fretboardDisplay}
            </div>
        </div>
    )
}