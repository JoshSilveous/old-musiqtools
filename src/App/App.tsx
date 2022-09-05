import './App.css'
import ScaleInfo from './ScaleInfo/ScaleInfo'
import ScaleMenu from './ScaleMenu/ScaleMenu'
import { useState } from 'react'
import { lightenColor } from '../global/JForm/JForm_Functions'
import { ThemeType, ThemeValuesType } from '../global/Types'
import useScale from './useScale'

function App() {
    const scaleState = useScale()

    const theme1: ThemeValuesType = {
        background: '#2c3f43',
        text: '#faecac',
        accent1: '#87c6bb',
        accent2: '#e16853'
    }

    const theme2: ThemeValuesType = {
        background: '#FFD670',
        text: '#e07046',
        accent1: '#FF70A6',
        accent2: '#5286d9'
    }

    const [themeValues, setThemeValues] = useState<ThemeValuesType>(theme2)
    const lightenedThemeValues: ThemeValuesType = {
        background: lightenColor(themeValues.background),
        text: lightenColor(themeValues.text),
        accent1: lightenColor(themeValues.accent1),
        accent2: lightenColor(themeValues.accent2)
    }


    const theme: ThemeType = { themeValues, lightenedThemeValues, setThemeValues }


    return (
        <div className="app" style={{
            color: themeValues.text,
            backgroundColor: themeValues.background
        }}>
            <h1>MusiqTools</h1>
            <p className="tagline">A straightforward app designed to make producing music less of a headache.</p>
            <div style={{ backgroundColor: lightenedThemeValues.background, padding: '30px', borderRadius: '15px' }}>
                <ScaleMenu scaleState={scaleState} theme={theme} />
            </div>
            <ScaleInfo scaleState={scaleState} theme={theme} />

        </div>
    )
}

export default App