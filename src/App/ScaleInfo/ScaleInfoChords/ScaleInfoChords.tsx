import { ScaleContextPropsType, ScaleThemePropsType } from "../../../global/Types"
import { generateMajor7Chord, generateMinor7Chord, generateDiminishedChord, toRomanNumeral } from "./ScaleInfoChords_Functions"

function ScaleInfoChords({ context, theme }: ScaleContextPropsType & ScaleThemePropsType) {

    let modeFormula: number[] = []
    /*      0 = Major
            1 = Minor
            2 = Diminshed       */
    switch (context.scaleSettings.mode) {
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
                chord = generateMajor7Chord(context.scaleNum[index])
                chordType = 'Major'
                break
            case 1: chord = generateMinor7Chord(context.scaleNum[index])
                chordType = 'Minor'
                break
            case 2: chord = generateDiminishedChord(context.scaleNum[index])
                chordType = 'Diminished'
                break
        }

        let currentChordRoman: string = toRomanNumeral(index + 1)
        if (item !== 0) { currentChordRoman = currentChordRoman.toLowerCase() }
        if (item === 2) { currentChordRoman = currentChordRoman + '°' }
        return (
            <div
                className='scale-info__chord'
                style={{
                    backgroundColor: theme.lightenedThemeValues.background,
                }}
            >
                <div className='scale-info__chord__item'>
                    {currentChordRoman}
                </div>
                <div
                    className='scale-info__chord__item'
                    style={{ width: '175px' }}
                >
                    {chordType}
                </div>

                {/* Maps over each item in the chord */}
                {chord.map((item, index) => {
                    return (
                        <div
                            className='scale-info__chord__item'
                            style={{
                                color: context.scaleNum.includes(item) ? theme.themeValues.accent2 : theme.themeValues.background
                            }}
                            key={index}
                        >
                            {context.scaleLetOptions[item]}
                        </div>)
                })}
            </div>
        )
    })

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {chords}
        </div>
    )
}

export default ScaleInfoChords