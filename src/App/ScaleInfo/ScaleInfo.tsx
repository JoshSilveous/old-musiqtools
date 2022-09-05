import { ScaleStatePropsType, ScaleThemePropsType } from "../../global/Types"
import ScaleInfoChords from "../ScaleInfo/ScaleInfoChords/ScaleInfoChords"
import ScaleInfoScale from "../ScaleInfo/ScaleInfoScale/ScaleInfoScale"

function ScaleInfo({ scaleState, theme }: ScaleStatePropsType & ScaleThemePropsType) {

    // Should display the full scale as well as chords
    return (
        <>
            <ScaleInfoScale scaleState={scaleState} theme={theme} />
            <ScaleInfoChords scaleState={scaleState} theme={theme} />
        </>

    )
}

export default ScaleInfo