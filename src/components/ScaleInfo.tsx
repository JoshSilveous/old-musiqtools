import { ScaleContextConsumer } from "../ScaleContext"
import { ScaleThemePropsType } from "./ComponentsTypes"
import ScaleInfoScale from "./ScaleInfoComponents/ScaleInfoScale"

function ScaleInfo({ theme }: ScaleThemePropsType) {

    // Should display the full scale as well as chords
    return (
        <ScaleContextConsumer>
            {context => (
                <ScaleInfoScale context={context} theme={theme} />
            )}
        </ScaleContextConsumer>

    )
}

export default ScaleInfo