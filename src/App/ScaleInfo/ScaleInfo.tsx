import { ScaleContextConsumer } from "../../global/ScaleContext"
import { ScaleThemePropsType } from "../../global/Types"
import ScaleInfoChords from "../ScaleInfo/ScaleInfoChords/ScaleInfoChords"
import ScaleInfoScale from "../ScaleInfo/ScaleInfoScale/ScaleInfoScale"

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