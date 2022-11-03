import { JSelect, JCheckbox } from '../../global/JForm/JForm'
import { ScaleStatePropsType } from '../../global/Types'



export default function ScaleMenu({ scaleState }: ScaleStatePropsType) {

    function updateScaleContext(valueName: string, value: number | boolean) {
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
                        primaryColor='var(--accent1)'
                        primaryColorHover='var(--accent1hover)'
                        backgroundColor='var(--background)'
                        backgroundColorHover='var(--background1)'
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
                        primaryColor='var(--accent1)'
                        primaryColorHover='var(--accent1hover)'
                        textColor='var(--background)'
                        textColorHover='var(--background2)'
                        width='70px'
                        returnFunction={(value: number) => updateScaleContext('tonic', value)}
                    />
                </div>
                <div className="scale-menu__row__JSelectContainer-mode">
                    <JSelect
                        options={scaleState.scaleModeOptions}
                        defaultIndex={0}
                        primaryColor='var(--accent2)'
                        primaryColorHover='var(--accent2hover)'
                        textColor='var(--background)'
                        textColorHover='var(--background2)'
                        width='180px'
                        returnFunction={(value: number) => updateScaleContext('mode', value)}
                    />
                </div>

            </div>
        </div>
    )
}