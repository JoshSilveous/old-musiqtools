import { ScaleContextPropsType } from "../ComponentsTypes"

function ScaleInfoScale({ context }: ScaleContextPropsType) {
    const scaleLetDisplay = context.scaleLet.map(item => {
        return (<div style={{
            backgroundColor: '#faecac',
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '5px',
            color: '#2c3f43',
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