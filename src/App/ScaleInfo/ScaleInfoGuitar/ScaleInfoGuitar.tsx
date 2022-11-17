import React from 'react'
import { ScaleStatePropsType } from '../../../global/Types'
import { ReactComponent as SettingsWrench } from '../../../assets/wrench.svg'
import './ScaleInfoGuitar.css'
import { usePopup } from '../../../global/usePopup/usePopup'

export default function ScaleInfoGuitar({ scaleState }: ScaleStatePropsType) {

    const popupWrenchMenu = usePopup()
    console.log(popupWrenchMenu)

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

    // define significantNote to pop out
    let significantNote: number;
    switch (scaleState.scaleSettings.mode) {
        case 0: significantNote = 6; break
        case 1: significantNote = 5; break
        case 2: significantNote = 1; break
        case 3: significantNote = 3; break
        case 4: significantNote = 5; break
        case 5: significantNote = 6; break
    }

    const fretboardDisplay = noteArray.map((string, stringIndex) => {

        const fretsDisplay = string.map((fret, fretIndex) => {
            const included = scaleState.scaleNum.includes(fret)



            function detectIfAnyHighlighted(fret: number): boolean {
                let anyHighlighted = false
                scaleState.highlightedNotes.forEach(item => {
                    if (item) { anyHighlighted = true }
                })
                if (!anyHighlighted) { return true }
                return scaleState.highlightedNotes[fret]
            }

            return (
                <div className='notecontainer' key={fretIndex}>

                    {/* settings wrench */}
                    {fretIndex === 0 &&
                        <div className="settings" onClick={popupWrenchMenu.trigger}>
                            <SettingsWrench fill="currentColor" />
                        </div>
                    }

                    {included &&
                        <div
                            className={
                                `note ${fret === scaleState.scaleNum[0] ? 'tonic' :
                                    fret === scaleState.scaleNum[significantNote] ? 'significant' : ''}`
                            }
                            style={{
                                opacity: detectIfAnyHighlighted(fret) ? '100%' : '30%'
                            }}
                            onClick={() => scaleState.setHighlightedNotes(prev => {
                                prev[fret] = !prev[fret]
                                return [...prev]
                            })}
                        >
                            {scaleState.scaleLetOptions[fret]}
                        </div>}

                    {/* gap to prevent distortions when scaling down */}
                    {!included && fretIndex !== 0 && <div style={{ width: '40px' }} />}

                    {/* show open string notes that aren't in scale */}
                    {!included && fretIndex === 0 &&
                        <div className="note-open">
                            {scaleState.scaleLetOptions[fret]}
                        </div>}
                </div>
            )
        })

        return (
            <div key={stringIndex} className='string'>
                {fretsDisplay}
            </div>
        )
    })

    const fretNums: (string | number)[] = ['O'];
    for (let i = 0; i < 12; i++) {
        fretNums.push(i + 1)
    }
    console.log(fretNums)

    const fretNumsDisplay = fretNums.map((item, index) => {
        return (
            <div className='notecontainer' key={index}>
                {index === 0 && <div style={{ width: '15px' }} />}
                <div className='number'>
                    {item}
                </div>
            </div>
        )
    })

    return (
        <div className='scaleinfoguitar-container'>
            <div className='scaleinfoguitar-fretboard'>
                {fretboardDisplay}
                <div className='string'>
                    {fretNumsDisplay}
                </div>
            </div>
        </div>
    )
}