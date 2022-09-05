import { JSelect, JCheckbox } from '../../global/JForm/JForm'
import { ScaleStatePropsType, ScaleThemePropsType } from '../../global/Types'



export default function ScaleMenu({ scaleState, theme }: ScaleStatePropsType & ScaleThemePropsType) {

    function updateScaleContext(valueName: string, value: number | boolean) {
        console.log("Updating Scale Context with", valueName, "as", value)
        scaleState.setScaleSettings(prev => {
            return { ...prev, [valueName]: value }
        })
    }

    return (
        <div className='scale-menu'>
            <div className='scale-menu__row'>
                Display Sharps (#) instead of Flats (b)?

                <div className='scale-menu__row__JCheckboxContainer'>
                    <JCheckbox
                        defaultState={false}
                        primaryColor={theme.themeValues.accent1}
                        backgroundColor={theme.themeValues.background}
                        returnFunction={(value: boolean) => updateScaleContext('isSharp', value)}
                    />
                </div>
            </div>
            <div className='scale-menu__row'>
                Scale:
                <div className="scale-menu__row__JSelectContainer-scale">
                    <JSelect
                        options={scaleState.scaleLetOptions}
                        defaultIndex={4}
                        primaryColor={theme.themeValues.accent1}
                        textColor={theme.themeValues.background}
                        width='70px'
                        returnFunction={(value: number) => updateScaleContext('tonic', value)}
                    />
                </div>
                <div className="scale-menu__row__JSelectContainer-mode">
                    <JSelect
                        options={scaleState.scaleModeOptions}
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