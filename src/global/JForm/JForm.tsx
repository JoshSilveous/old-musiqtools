import React from 'react'
import './JForm.css'
import { ReactComponent as DropDownArrow } from '../../assets/DropDownArrow.svg'
import { ReactComponent as CheckmarkActive } from '../../assets/checkbox_active.svg'
import { JCheckboxProps, JSelectProps } from './JForm_Types'
import { lightenColor } from './JForm_Functions'




export function JSelect({ options, defaultIndex, primaryColor, textColor, width, returnFunction }: JSelectProps) {

    // States
    const [currentOption, setCurrentOption] = React.useState(defaultIndex)
    const [dropDownOpen, setDropDownOpen] = React.useState(false)
    const [hoverState, setHoverState] = React.useState(primaryColor)
    const [optionsHover, setOptionsHover] = React.useState(generateOptionsBoolArray)

    // Variables used to get div size
    const divSizeClosed = 24 // ! This means the function only works if font-size is 24px and it doesn't wrap
    const divSizeOpened = (divSizeClosed * (options.length + 1) + 11.5) // This assumes all lines don't wrap

    // Sends update whenever an option is picked
    React.useEffect(() => {
        returnFunction(currentOption)
        // eslint-disable-next-line
    }, [currentOption])


    // Styles

    const menustyle: React.CSSProperties = {
        backgroundColor: hoverState, //primaryColor
        color: textColor,
        maxHeight: dropDownOpen ? divSizeOpened : divSizeClosed
    }


    // Helper Functions
    function onHover(): void {
        setHoverState(lightenColor(primaryColor))
    }
    function onHoverExit(): void {
        setHoverState(primaryColor)
        setOptionsHover(generateOptionsBoolArray)
    }
    function toggleDropDown(): void {
        setDropDownOpen(prev => !prev)
    }
    function generateOptionsBoolArray(): Boolean[] {
        let boolArray: Boolean[] = []
        options.forEach(() => boolArray.push(false))
        return boolArray
    }
    function makeThisHover(index: number): void {
        setOptionsHover(prev => {
            return prev.map((item, itemIndex) => itemIndex === index ? true : false)
        })
    }

    // Maps out all the options in the dropdown menu for DESKTOP
    const optionElements = options.map((item, index) => {
        return (
            <div
                key={index}
                onClick={() => setCurrentOption(index)}
                onMouseEnter={() => makeThisHover(index)}
                style={{
                    color: optionsHover[index] ? lightenColor(textColor) : textColor
                }}
            >{item}</div>)
    })

    // Maps out options for MOBILE
    const mobileOptionElements = options.map((item, index) => {
        return (
            <option
                key={index}
                value={index}
                onClick={() => setCurrentOption(index)}
            >
                {item}
            </option>
        )
    })

    function selectSetCurrentOption(e: any) {
        setCurrentOption(e.target.value)
    }

    return (
        <>
            <div className="JForm-mobile" style={{ color: textColor }}>
                <select
                    className="JForm__menustyle JForm-mobile"
                    defaultValue={defaultIndex}
                    onChange={selectSetCurrentOption}
                    style={{
                        backgroundColor: primaryColor,
                        color: textColor
                    }}
                    name="cars"
                    id="cars"
                    onFocus={() => setDropDownOpen(true)}
                    onBlur={() => setDropDownOpen(false)}
                >
                    {mobileOptionElements}
                </select>
                <DropDownArrow
                    fill="currentColor"
                    className="JForm__DropDownArrow-mobile"
                    style={{
                        transform: dropDownOpen ? '' : 'rotate(-180deg)'
                    }}
                />
            </div>

            <div
                className='JForm__menustyle JForm-desktop'
                style={menustyle}
                onMouseEnter={onHover}
                onMouseLeave={onHoverExit}
                onClick={toggleDropDown}
            >
                <div
                    className='JForm__buttonstyle'
                    style={{
                        width: width
                    }}
                >
                    {options[currentOption]}
                    <div
                        className="JForm__DropDownArrow-desktop"
                    >
                        <DropDownArrow style={{
                            transition: 'transform 500ms ease',
                            transform: dropDownOpen ? '' : 'rotate(-180deg)'

                        }} fill="currentColor" />
                    </div>
                </div>

                <div style={{ height: '1.5px', backgroundColor: textColor, margin: '5px 0px' }} />

                <div>
                    {optionElements}
                </div>

            </div>
        </>
    )
}



export function JCheckbox({ defaultState, primaryColor, backgroundColor, returnFunction }: JCheckboxProps) {



    const [isChecked, setIsChecked] = React.useState(defaultState)
    const [isHovered, setIsHovered] = React.useState(false)

    React.useEffect(() => {
        returnFunction(isChecked)
        // eslint-disable-next-line
    }, [isChecked])

    function determineBackgroundColor(): any {
        let currentColor: string
        if (isChecked) {
            if (isHovered) {
                currentColor = lightenColor(primaryColor)
            } else {
                currentColor = primaryColor
            }
        } else {
            if (isHovered) {
                currentColor = lightenColor(backgroundColor)
            } else {
                currentColor = backgroundColor
            }
        }
        return currentColor
    }

    const checkboxStyle: React.CSSProperties = {
        backgroundColor: determineBackgroundColor(),
        width: '14px',
        height: '14px',
        display: 'flex',
        borderRadius: '5px',
        border: `solid 6px ${isHovered ? lightenColor(primaryColor) : primaryColor}`, // There's a weird delay, I should re-do the hover logic so that the whole box highlights on hover
        cursor: 'pointer',
        transition: 'background-color 0.2s ease'
    }

    function onHover() {
        setIsHovered(true)
    }
    function onHoverExit() {
        setIsHovered(false)
    }

    return (
        <div
            style={checkboxStyle}
            onMouseEnter={onHover}
            onMouseLeave={onHoverExit}
            onClick={() => setIsChecked(prev => !prev)}
        >
            <div style={{
                display: 'flex'
            }}>
                <CheckmarkActive style={{ stroke: backgroundColor }} />
            </div>
        </div>
    )
}

