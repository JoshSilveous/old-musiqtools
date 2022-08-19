import { ScaleContextPropsType } from "./ComponentsTypes"
import ScaleInfoScale from "./ScaleInfoComponents/ScaleInfoScale"

function ScaleInfo({ context }: ScaleContextPropsType) {

    // Should display the full scale as well as chords
    return (
        <ScaleInfoScale context={context} />
    )
}

export default ScaleInfo