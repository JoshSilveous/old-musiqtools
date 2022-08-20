import JSelect from '../libraries/JForm'
import { JCheckbox } from '../libraries/JForm'
import { ScaleContextPropsType, ScaleThemePropsType } from './Components_Types'



export default function ScaleMenu({ context, theme }: ScaleContextPropsType & ScaleThemePropsType) {

    function updateScaleContext(valueName: string, value: number | boolean) {
        context.setScaleSettings(prev => {
            return { ...prev, [valueName]: value }
        })
    }

    const scaleMenuSingleStyle: React.CSSProperties = {
        display: 'flex',
        gap: '20px',
        fontSize: '25px'
    }
    const scaleMenuAllStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px'
    }

    return (
        <div style={scaleMenuAllStyle}>
            <div style={scaleMenuSingleStyle}>
                Display Sharps (#) instead of Flats (b)?
                <div style={{ margin: '4px' }}>
                    <JCheckbox
                        defaultState={false}
                        primaryColor={theme.themeValues.accent1}
                        backgroundColor={theme.themeValues.background}
                        returnFunction={(value: boolean) => updateScaleContext('isSharp', value)}
                    />
                </div>
            </div>
            <div style={scaleMenuSingleStyle}>
                Scale:
                <div style={{
                    width: '70px'
                }}>
                    <JSelect
                        options={context.scaleLetOptions}
                        defaultIndex={4}
                        primaryColor={theme.themeValues.accent1}
                        textColor={theme.themeValues.background}
                        width='70px'
                        returnFunction={(value: number) => updateScaleContext('scale', value)}
                    />
                </div>
                <div style={{ width: '20px' }}></div>
                <div style={{ width: '180px' }}>
                    <JSelect
                        options={context.scaleModeOptions}
                        defaultIndex={0}
                        primaryColor={theme.themeValues.accent2}
                        textColor={theme.themeValues.background}
                        width='180px'
                        returnFunction={(value: number) => updateScaleContext('mode', value)}
                    />
                </div>

            </div>
        </div>
    )
}