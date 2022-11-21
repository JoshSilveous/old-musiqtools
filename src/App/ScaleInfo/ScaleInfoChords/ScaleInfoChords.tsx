import { ScaleStatePropsType } from '../../../global/Types'
import { generateMajor7Chord, generateMinor7Chord, generateDiminishedChord, toRomanNumeral } from './ScaleInfoChords_Functions'
import React from 'react'
import './ScaleInfoChords.css'

function ScaleInfoChords({ scaleState }: ScaleStatePropsType) {

    let modeFormula: number[] = []
    /*      0 = Major
            1 = Minor
            2 = Diminshed       */
    switch (scaleState.scaleSettings.mode) {
        case 0: modeFormula = [0, 1, 1, 0, 0, 1, 2]; break
        case 1: modeFormula = [1, 1, 0, 0, 1, 2, 0]; break
        case 2: modeFormula = [1, 0, 0, 1, 2, 0, 1]; break
        case 3: modeFormula = [0, 0, 1, 2, 0, 1, 1]; break
        case 4: modeFormula = [0, 1, 2, 0, 1, 1, 0]; break
        case 5: modeFormula = [1, 2, 0, 1, 1, 0, 0]; break
        case 6: modeFormula = [2, 0, 1, 1, 0, 0, 1]; break
    }
    function highlightThis(indexToHighlight: number) {
        // Maps through current highlightedNotes, finds the one that was selected, and inverts it's value
        scaleState.setHighlightedNotes(prev => prev.map(
            (isHighlighted, isHighlightedIndex) => indexToHighlight === isHighlightedIndex ? !isHighlighted : isHighlighted))
    }

    // Maps over each chord
    const chords = modeFormula.map((chordTypeValue, chordTypeValueIndex) => {
        let chord: number[] = []
        let chordType: string = ''
        switch (chordTypeValue) {
            case 0:
                chord = generateMajor7Chord(scaleState.scaleNum[chordTypeValueIndex])
                chordType = 'Major'
                break
            case 1: chord = generateMinor7Chord(scaleState.scaleNum[chordTypeValueIndex])
                chordType = 'Minor'
                break
            case 2: chord = generateDiminishedChord(scaleState.scaleNum[chordTypeValueIndex])
                chordType = 'Diminished'
                break
        }

        let currentChordRoman: string = toRomanNumeral(chordTypeValueIndex + 1)
        if (chordTypeValue !== 0) { currentChordRoman = currentChordRoman.toLowerCase() }
        if (chordTypeValue === 2) { currentChordRoman = currentChordRoman + '°' }

        function highlightChord() {
            let newHighlightedNotes = []
            for (let i = 0; i < 12; i++) {
                newHighlightedNotes[i] = chord.slice(0, 3).includes(i)
            }

            // detects if onClick causes any different
            let changeOccurs = false
            newHighlightedNotes.forEach((highlightThis, highlightThisIndex) => {
                if (highlightThis !== scaleState.highlightedNotes[highlightThisIndex]) { changeOccurs = true }
            })

            if (changeOccurs) {
                scaleState.setHighlightedNotes(newHighlightedNotes)
            } else {
                scaleState.setHighlightedNotes(prev => prev.map(isHighlighted => false))
            }
        }


        return (
            <React.Fragment key={chordTypeValueIndex}>
                <hr />
                <div
                    className='scaleinfochord-chord'
                >
                    <div
                        className="scaleinfochord-chordinfo"
                        onClick={highlightChord}
                    >
                        <div className='scaleinfochord-numeral'>
                            <div>
                                <span>{currentChordRoman}</span>
                            </div>
                        </div>
                        <div
                            className='scaleinfochord-label'
                        >
                            <div>
                                <span>{scaleState.scaleLet[chordTypeValueIndex]} {chordType}</span>
                            </div>
                        </div>
                    </div>

                    {/* Maps over each chordTypeValue in the chord */}
                    {chord.map((note, noteIndex) => {
                        let noteClassName = ''
                        let handleClick = () => {
                            highlightThis(note)
                        }
                        if (!scaleState.scaleNum.includes(note)) {
                            noteClassName = 'seventh unincluded'
                            handleClick = () => {
                                console.log('Not in scale!')
                            }
                        }
                        else if (noteIndex === 3) {
                            noteClassName = 'seventh included'
                        }
                        let isHighlighted = scaleState.highlightedNotes[note]
                        return (
                            <div
                                className={`scaleinfochord-note ${noteClassName} ${isHighlighted && 'highlighted'}`}
                                key={noteIndex}
                                style={{ backgroundColor: scaleState.highlightedNotes[note] ? 'var(--background3)' : '' }}
                                onClick={handleClick}
                            >
                                <span>{scaleState.scaleLetOptions[note]}</span>
                            </div>)
                    })
                    }
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className='scaleinfochord-container'>
            <div className='scaleinfochord-chord'>
                <div className="scaleinfochord-desc-numeral"></div>
                <div className='scaleinfochord-desc-label'>
                    Chord
                </div>
                <div className='scaleinfochord-desc-note'>
                    1<sup>st</sup>
                </div>
                <div className='scaleinfochord-desc-note'>
                    3<sup>rd</sup>
                </div>
                <div className='scaleinfochord-desc-note'>
                    5<sup>th</sup>
                </div>
                <div className='scaleinfochord-desc-note seventh'>
                    7<sup>th</sup>
                </div>
            </div>
            {chords}
        </div>
    )
}

export default ScaleInfoChords