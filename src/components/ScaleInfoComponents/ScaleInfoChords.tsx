import { ScaleContextPropsType, ScaleThemePropsType } from "../Components_Types"
import { generateMajor7Chord, generateMinor7Chord, generateDiminishedChord, toRomanNumeral } from "./ScaleInfoChords_Functions"

function ScaleInfoChords({ context, theme }: ScaleContextPropsType & ScaleThemePropsType) {

    let CMaj = generateMajor7Chord(4).map(item => context.scaleLetOptions[item])
    let AMin = generateMinor7Chord(1).map(item => context.scaleLetOptions[item])
    let BDim = generateDiminishedChord(3).map(item => context.scaleLetOptions[item])

    console.log('Major: ', CMaj)
    console.log('Minor: ', AMin)
    console.log('Diminished: ', BDim)

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

        const chordIndividualStyle: React.CSSProperties = {
            padding: '10px',
            width: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
            fontWeight: '700'
        }

        let currentChordRoman: string = toRomanNumeral(index + 1)
        if (item !== 0) { currentChordRoman = currentChordRoman.toLowerCase() }
        if (item === 2) { currentChordRoman = currentChordRoman + '°' }
        return (
            <div style={{
                display: 'flex',
                gap: '5px',
                backgroundColor: theme.lightenedThemeValues.background,
                borderRadius: '20px'

            }}>
                <div style={chordIndividualStyle}>
                    {currentChordRoman}
                </div>
                <div style={{ ...chordIndividualStyle, width: '175px' }}>
                    {chordType}
                </div>

                {/* Maps over each item in the chord */}
                {chord.map(item => {
                    return (
                        <div style={{
                            ...chordIndividualStyle,
                            color: context.scaleNum.includes(item) ? theme.themeValues.accent2 : theme.themeValues.background
                        }}>
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