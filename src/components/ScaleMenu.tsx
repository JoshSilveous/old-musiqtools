import JSelect from '../libraries/JForm'
import { JCheckbox } from '../libraries/JForm'
import { ScaleContextPropsType, ScaleThemePropsType } from './Components_Types'



export default function ScaleMenu({ context, theme }: ScaleContextPropsType & ScaleThemePropsType) {

    function updateScaleContext(valueName: string, value: number | boolean) {
        context.setScaleSettings(prev => {
            return { ...prev, [valueName]: value }
        })
    }

    return (
        <div className='scale-menu'>
            <div className='scale-menu__row'>
                Display Sharps (#) instead of Flats (b)?
                {//Temporary
                }




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
                        options={context.scaleLetOptions}
                        defaultIndex={4}
                        primaryColor={theme.themeValues.accent1}
                        textColor={theme.themeValues.background}
                        width='70px'
                        returnFunction={(value: number) => updateScaleContext('scale', value)}
                    />
                </div>
                <div className="scale-menu__row__JSelectContainer-mode">
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