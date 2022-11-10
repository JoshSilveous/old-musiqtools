import React from 'react'
import './JForm.css'
import { ReactComponent as DropDownArrow } from '../../assets/DropDownArrow.svg'
import { ReactComponent as CheckmarkActive } from '../../assets/checkbox_active.svg'
import { JCheckboxProps, JSelectProps } from './JForm_Types'


export function JSelect({ options, defaultIndex, primaryColor, primaryColorHover, textColor, textColorHover, width, returnFunction }: JSelectProps) {

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
        setHoverState(primaryColorHover)
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
                    color: optionsHover[index] || index === currentOption ? textColorHover : textColor
                }}
            >{item}</div>)
    })

    // Maps out options for MOBILE
    const mobileOptionElements = options.map((item, index) => {
        return (
            <option
                key={index}
                value={index}
            >
                {item}
            </option>
        )
    })

    function selectSetCurrentOption(e: any) {
        setCurrentOption(+e.target.value)
        setDropDownOpen(false)
        // Why the +?
        // I spend DAYS debugging this. Basically, HTML <select> element ALWAYS returns a string, not an integer.
        // This code was expecting an integer, so when it got a string, everything messed up.
        // The + turns a string into an integer. It feels like an icky solution, but that's JS for ya.
    }

    // Variable declared outside of function for persistence across re-renders
    let newIndex = currentOption
    function handleKeydown(e: any) {
        if (e.key === "ArrowDown" || e.key.toUpperCase() === "S") {
            e.preventDefault()
            newIndex++
            if (newIndex >= options.length) { newIndex = newIndex - options.length }
            setCurrentOption(newIndex)
        }
        else if (e.key === "ArrowUp" || e.key.toUpperCase() === "W") {
            e.preventDefault()
            newIndex--
            if (newIndex < 0) { newIndex = newIndex + options.length }
            setCurrentOption(newIndex)
        }
        else if (e.key === " " || e.key === "Enter") {
            e.preventDefault()
            setDropDownOpen(prev => !prev)
        }
        else if (e.key === "Tab") {
            setDropDownOpen(false)
        }
        else { return }
    }


    const divRef = React.useRef<any>(null)

    React.useEffect(() => {
        if (divRef.current) {
            divRef.current.addEventListener('keydown', handleKeydown)
            console.log('JSelect Listener Added')
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="jselect mobile" style={{ color: textColor }}>
                <select
                    className="jselect"
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
                    value={currentOption}
                >
                    {mobileOptionElements}
                </select>
                <DropDownArrow
                    fill="currentColor"
                    className="jselect-arrow-mobile"
                    style={{
                        transform: dropDownOpen ? '' : 'rotate(-180deg)'
                    }}
                />


            </div>

            <div
                tabIndex={0}
                ref={divRef}
                className='jselect desktop'
                style={menustyle}
                onMouseEnter={onHover}
                onMouseLeave={onHoverExit}
                onClick={toggleDropDown}
            >
                <div
                    className='jselect-button'
                    style={{
                        width: width
                    }}
                >
                    {options[currentOption]}
                    <div
                        className="jselect-arrow-desktop"
                    >
                        <DropDownArrow style={{
                            transition: 'transform 500ms ease',
                            transform: dropDownOpen ? '' : 'rotate(-180deg)',
                            flexShrink: 0
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



export function JCheckbox({ defaultState, primaryColor, primaryColorHover, backgroundColor, backgroundColorHover, returnFunction }: JCheckboxProps) {



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
                currentColor = primaryColorHover
            } else {
                currentColor = primaryColor
            }
        } else {
            if (isHovered) {
                currentColor = backgroundColorHover
            } else {
                currentColor = backgroundColor
            }
        }
        return currentColor
    }

    const checkboxStyle: React.CSSProperties = {
        backgroundColor: determineBackgroundColor(),
        borderColor: isHovered ? primaryColorHover : primaryColor
    }

    function onHover() {
        setIsHovered(true)
    }
    function onHoverExit() {
        setIsHovered(false)
    }

    function handleKeydown(e: any) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            setIsChecked(prev => !prev)
        }
        else return
    }
    const divRef = React.useRef<any>(null)

    React.useEffect(() => {
        if (divRef) {
            divRef.current.addEventListener('keydown', handleKeydown)
            console.log('JCheckbox Listener added')
        }
    }, [])


    return (
        <div
            tabIndex={0}
            ref={divRef}
            style={checkboxStyle}
            className="jcheckbox"
            onMouseEnter={onHover}
            onMouseLeave={onHoverExit}
            onClick={() => setIsChecked(prev => !prev)}
        >
            <div style={{
                display: 'flex'
            }}>
                <CheckmarkActive style={{
                    stroke: isHovered ? backgroundColorHover : backgroundColor,
                    flexShrink: 0,
                    display: 'flex',
                    transition: 'stroke 0.2s ease, opacity 0.2s ease',
                    opacity: isChecked ? '100%' : '0%',
                }} />
            </div>
        </div>
    )
}

