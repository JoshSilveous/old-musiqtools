import React from 'react'
import JSelect from './JForm'
import { JCheckbox } from './JForm'
import type { ScaleContextProviderType } from '../ScaleContext'

type ScaleMenuProps = {
    context: ScaleContextProviderType
}

export default function ScaleMenu({ context }: ScaleMenuProps) {

    function updateScaleContext(valueName: string, value: number | boolean) {
        context.setScaleSettings(prev => {
            return { ...prev, [valueName]: value }
        })
    }

    return (
        <div className="issharp-and-scale-menus">
            <div className="issharp-menu">
                Display Sharps (#) instead of Flats (b)?
                <div className="issharp-menu__checkbox-container">
                    <JCheckbox
                        defaultState={false}
                        primaryColor='#87c6bb'
                        backgroundColor='#2c3f43'
                        returnFunction={(value: boolean) => updateScaleContext('isSharp', value)}
                    />
                </div>
            </div>
            <div className="scale-menu">
                Scale:
                <JSelect
                    options={context.scaleLetOptions}
                    defaultIndex={4}
                    primaryColor='#87c6bb'
                    textColor='#2c3f43'
                    width='70px'
                    returnFunction={(value: number) => updateScaleContext('scale', value)}
                />
                <JSelect
                    options={context.scaleModeOptions}
                    defaultIndex={0}
                    primaryColor='#e16853'
                    textColor='#2c3f43'
                    width='180px'
                    returnFunction={(value: number) => updateScaleContext('mode', value)}
                />

            </div>
        </div>
    )
}