import { ScaleStatePropsType } from "../../global/Types"
import ScaleInfoChords from "../ScaleInfo/ScaleInfoChords/ScaleInfoChords"
import ScaleInfoScale from "../ScaleInfo/ScaleInfoScale/ScaleInfoScale"
import ScaleInfoGuitar from "./ScaleInfoGuitar/ScaleInfoGuitar"

function ScaleInfo({ scaleState }: ScaleStatePropsType) {

    // Should display the full scale as well as chords
    return (
        <>
            <ScaleInfoScale scaleState={scaleState} />
            <ScaleInfoChords scaleState={scaleState} />
            <ScaleInfoGuitar scaleState={scaleState} />
        </>

    )
}

export default ScaleInfo