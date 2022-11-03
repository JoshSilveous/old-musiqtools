import { ScaleStatePropsType } from '../../../global/Types'
import { generateMajor7Chord, generateMinor7Chord, generateDiminishedChord, toRomanNumeral } from './ScaleInfoChords_Functions'
import React from 'react';
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
    function highlightThis(index: number) {
        // Maps through current highlightedNotes, finds the one that was selected, and inverts it's value
        scaleState.setHighlightedNotes(prev => prev.map((item, thisindex) => index === thisindex ? !item : item))
    }

    // Maps over each chord
    const chords = modeFormula.map((item, index) => {
        let chord: number[] = []
        let chordType: string = ''
        switch (item) {
            case 0:
                chord = generateMajor7Chord(scaleState.scaleNum[index])
                chordType = 'Major'
                break
            case 1: chord = generateMinor7Chord(scaleState.scaleNum[index])
                chordType = 'Minor'
                break
            case 2: chord = generateDiminishedChord(scaleState.scaleNum[index])
                chordType = 'Diminished'
                break
        }

        let currentChordRoman: string = toRomanNumeral(index + 1)
        if (item !== 0) { currentChordRoman = currentChordRoman.toLowerCase() }
        if (item === 2) { currentChordRoman = currentChordRoman + '°' }


        return (
            <>
                <div
                    key={index}
                    className='scaleinfochord-chord'
                    onClick={() => { console.log('test') }}
                >
                    <div className='scaleinfochord-numeral'>
                        {currentChordRoman}
                    </div>
                    <div
                        className='scaleinfochord-label'
                    >
                        {scaleState.scaleLet[index]} {chordType}
                    </div>

                    {/* Maps over each item in the chord */}
                    {chord.map((item, index) => {
                        let itemClassName = ''
                        let handleClick = () => {
                            highlightThis(item)
                        }
                        if (!scaleState.scaleNum.includes(item)) {
                            itemClassName = 'seventh unincluded'
                            handleClick = () => {
                                console.log('Not in scale!')
                            }
                        }
                        else if (index === 3) {
                            itemClassName = 'seventh included'
                        }
                        let isHighlighted = scaleState.highlightedNotes[item]
                        return (
                            <div
                                className={`scaleinfochord-note ${itemClassName} ${isHighlighted && 'highlighted'}`}
                                key={index}
                                style={{ backgroundColor: scaleState.highlightedNotes[item] ? 'var(--background3)' : '' }}
                                onClick={handleClick}
                            >
                                {scaleState.scaleLetOptions[item]}
                            </div>)
                    })
                    }
                </div>
                {index != modeFormula.length - 1 && <hr />}
            </>
        )
    })

    return (
        <div className='scaleinfochord-container'>
            {chords}
        </div>
    )
}

export default ScaleInfoChords