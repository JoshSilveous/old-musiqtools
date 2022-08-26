import { useState } from "react"
import { scaleSettingsType } from "../global/Types"

const scaleDefaultSettings: scaleSettingsType = { tonic: 4, mode: 0, isSharp: false }

const [scaleSettings, setScaleSettings] = useState(scaleDefaultSettings)

const scaleLetOptions = scaleSettings.isSharp ?
    ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G'] :
    ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G']
const scaleModeOptions =
    ['Ionian (Major)', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian (Minor)', 'Locrian']

function genScaleNum(tonic: number, mode: number) {

    let scaleFormula: number[] = []
    switch (mode) {
        case 0: scaleFormula = [2, 2, 1, 2, 2, 2]; break
        case 1: scaleFormula = [2, 1, 2, 2, 2, 1]; break
        case 2: scaleFormula = [1, 2, 2, 2, 1, 2]; break
        case 3: scaleFormula = [2, 2, 2, 1, 2, 2]; break
        case 4: scaleFormula = [2, 2, 1, 2, 2, 1]; break
        case 5: scaleFormula = [2, 1, 2, 2, 1, 2]; break
        case 6: scaleFormula = [1, 2, 2, 1, 2, 2]; break
    }

    let scale = [tonic]
    scaleFormula.forEach(interval => {
        let nextScaleNum = scale[scale.length - 1] + interval
        if (nextScaleNum > 11) { nextScaleNum = nextScaleNum - 12 }
        scale.push(nextScaleNum)
    })
    return scale
}

const scaleNum = genScaleNum(scaleSettings.tonic, scaleSettings.mode)

function genScaleLet(scaleNumberArray: number[]) {
    let scaleLetter: string[] = []
    scaleNumberArray.forEach(item => {
        scaleLetter.push(scaleLetOptions[item])
    })
    return scaleLetter
}
const scaleLet = genScaleLet(scaleNum)

const scaleContext = {
    scaleNum,
    scaleLet,
    scaleSettings,
    setScaleSettings,
    scaleLetOptions,
    scaleModeOptions
}