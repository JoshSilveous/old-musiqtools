export function generateMajor7Chord(tonic: number) {
    const returnArray = [tonic, tonic + 4, tonic + 7, tonic + 11]
    return returnArray.map(item => item > 11 ? item - 12 : item)
}

export function generateMinor7Chord(tonic: number) {
    const returnArray = [tonic, tonic + 3, tonic + 7, tonic + 10]
    return returnArray.map(item => item > 11 ? item - 12 : item)
}

export function generateDiminishedChord(tonic: number) {
    const returnArray = [tonic, tonic + 3, tonic + 6, tonic + 9]
    return returnArray.map(item => item > 11 ? item - 12 : item)

}

export function toRomanNumeral(number: number): string {
    switch (number) {
        case 1: return 'I'
        case 2: return 'II'
        case 3: return 'III'
        case 4: return 'IV'
        case 5: return 'V'
        case 6: return 'VI'
        case 7: return 'VII'
        default: return 'ERROR'
    }
}