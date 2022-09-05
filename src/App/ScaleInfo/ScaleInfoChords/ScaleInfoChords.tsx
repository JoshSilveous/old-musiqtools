import { ScaleStatePropsType, ScaleThemePropsType } from "../../../global/Types"
import { generateMajor7Chord, generateMinor7Chord, generateDiminishedChord, toRomanNumeral } from "./ScaleInfoChords_Functions"

function ScaleInfoChords({ scaleState, theme }: ScaleStatePropsType & ScaleThemePropsType) {

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
            <div
                key={index}
                className='scale-info__chord'
                style={{
                    backgroundColor: theme.lightenedThemeValues.background,
                }}
            >
                <div className='scale-info__chord__numeral'>
                    {currentChordRoman}
                </div>
                <div
                    className='scale-info__chord__label'
                >
                    {chordType}
                </div>

                {/* Maps over each item in the chord */}
                {chord.map((item, index) => {
                    let currentColor = theme.themeValues.accent2
                    if (!scaleState.scaleNum.includes(item)) {
                        currentColor = theme.themeValues.background
                    }
                    else if (index === 3) {
                        currentColor = theme.themeValues.accent1
                    }
                    return (
                        <div
                            className='scale-info__chord__item'
                            style={{
                                color: currentColor
                            }}
                            key={index}
                        >
                            {scaleState.scaleLetOptions[item]}
                        </div>)
                })}
            </div>
        )
    })

    return (
        <div className="scale-info__chord__container">
            {chords}
        </div>
    )
}

export default ScaleInfoChords