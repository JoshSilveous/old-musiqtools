import { ScaleContextPropsType, ScaleThemePropsType } from "../Components_Types"

function ScaleInfoScale({ context, theme }: ScaleContextPropsType & ScaleThemePropsType) {

    const scaleLetIndividualContainer: React.CSSProperties = {
        backgroundColor: theme.lightenedThemeValues.background,
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        color: theme.themeValues.text,
        fontWeight: '700'
    }
    const scaleLetDisplay = context.scaleLet.map((item, index) => {
        return (<div style={scaleLetIndividualContainer} key={index}>{item}</div>)
    })
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            fontSize: '30px',
            gap: '5px',
            marginTop: '30px'
        }}>
            {scaleLetDisplay}
        </div>
    )
}
export default ScaleInfoScale