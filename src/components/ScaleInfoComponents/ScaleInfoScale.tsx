import { ScaleContextPropsType, ScaleThemePropsType } from "../ComponentsTypes"

function ScaleInfoScale({ context, theme }: ScaleContextPropsType & ScaleThemePropsType) {
    const scaleLetDisplay = context.scaleLet.map(item => {
        return (<div style={{
            backgroundColor: theme.lightenedThemeValues.background,
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            color: theme.themeValues.text,
            fontWeight: '700'
        }}>{item}</div>)
    })
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            fontSize: '30px',
            gap: '5px'
        }}>
            {scaleLetDisplay}
        </div>
    )
}
export default ScaleInfoScale