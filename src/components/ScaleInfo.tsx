import { ScaleContextConsumer } from "../ScaleContext"
import { ScaleThemePropsType } from "./Components_Types"
import ScaleInfoChords from "./ScaleInfoComponents/ScaleInfoChords"
import ScaleInfoScale from "./ScaleInfoComponents/ScaleInfoScale"

function ScaleInfo({ theme }: ScaleThemePropsType) {

    // Should display the full scale as well as chords
    return (
        <ScaleContextConsumer>
            {context => (
                <>
                    <ScaleInfoScale context={context} theme={theme} />
                    <ScaleInfoChords context={context} theme={theme} />
                </>
            )}
        </ScaleContextConsumer>

    )
}

export default ScaleInfo