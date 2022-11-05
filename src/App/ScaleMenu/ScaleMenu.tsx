import { JSelect, JCheckbox } from '../../global/JForm/JForm'
import { ScaleStatePropsType } from '../../global/Types'
import './ScaleMenu.css'


export default function ScaleMenu({ scaleState }: ScaleStatePropsType) {

    function updateScaleContext(valueName: string, value: number | boolean) {
        scaleState.setScaleSettings(prev => {
            return { ...prev, [valueName]: value }
        })
        scaleState.setHighlightedNotes(
            [false, false, false, false, false, false, false, false, false, false, false, false]
        )
    }

    return (
        <div className='scalemenu'>
            <div className='scalemenu-row'>
                Display Sharps (#) instead of Flats (b)?
                <div className='jcheckbox-container'>
                    <JCheckbox
                        defaultState={false}
                        primaryColor='var(--accent1)'
                        primaryColorHover='var(--accent1hover)'
                        backgroundColor='var(--background)'
                        backgroundColorHover='var(--background2)'
                        returnFunction={(value: boolean) => updateScaleContext('isSharp', value)}
                    />
                </div>
            </div>
            <div className='scalemenu-row'>
                Scale:
                <div className='jselect-container scale'>
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
                <div className='jselect-container mode'>
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