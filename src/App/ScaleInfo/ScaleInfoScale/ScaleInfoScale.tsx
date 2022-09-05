import { ScaleStatePropsType, ScaleThemePropsType } from "../../../global/Types"

function ScaleInfoScale({ scaleState, theme }: ScaleStatePropsType & ScaleThemePropsType) {

    const scaleLetDisplay = scaleState.scaleLet.map((item, index) => {
        return (
            <div
                className='scale-info__scale__item'
                style={{
                    backgroundColor: theme.lightenedThemeValues.background,
                    color: theme.themeValues.text
                }}
                key={index}
            >
                {item}
            </div>)
    })
    return (
        <div className='scale-info__scale'>
            {scaleLetDisplay}
        </div>
    )
}
export default ScaleInfoScale