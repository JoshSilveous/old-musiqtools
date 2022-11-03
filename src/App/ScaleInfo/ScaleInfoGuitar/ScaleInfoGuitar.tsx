import React from 'react';
import { ScaleStatePropsType } from '../../../global/Types';
import './ScaleInfoGuitar.css'
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

            return (
                <div className='notecontainer'>
                    {included ?
                        <div className={`note ${fret === scaleState.scaleNum[0] ? 'tonic' : ''}`} >
                            {scaleState.scaleLetOptions[fret]}
                        </div> :
                        ''}
                </div>
            )
        })

        return (
            <div key={stringIndex} className='string'>
                {fretsDisplay}
            </div>
        )
    })

    return (
        <div className='scaleinfoguitar-container'>
            <div className='scaleinfoguitar-fretboard'>
                {fretboardDisplay}
            </div>
        </div>
    )
}