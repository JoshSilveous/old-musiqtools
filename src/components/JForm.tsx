import React from 'react';
import { ReactComponent as DropDownArrow } from '../assets/DropDownArrow.svg';



interface Option { value: any, label: string; }
interface JSelectProps {
    options: Option[],
    defaultIndex: number,
    primaryColor: string,
    textColor: string,
    width: string,
    returnFunction: Function
}

export default function JSelect({ options, defaultIndex, primaryColor, textColor, width, returnFunction }: JSelectProps) {

    // States
    const [currentOption, setCurrentOption] = React.useState(defaultIndex);
    const [dropDownOpen, setDropDownOpen] = React.useState(false);
    const [hoverState, setHoverState] = React.useState(primaryColor)
    const [optionsHover, setOptionsHover] = React.useState(generateOptionsBoolArray)
    const inputRef = React.useRef<any>(null);

    // Variables used to get div size
    const divSizeClosed = 24 // ! This means the function only works if font-size is 24px and it doesn't wrap
    const divSizeOpened = (divSizeClosed * (options.length + 1) + 11.5) // This assumes all lines don't wrap

    // Sends update whenever an option is picked
    React.useEffect(() => {
        returnFunction(currentOption)
    }, [currentOption])


    // Styles
    const buttonstyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: width
    };
    const menustyle: React.CSSProperties = {
        backgroundColor: hoverState, //primaryColor
        color: textColor,
        height: 'min-content',
        fontWeight: '700',
        fontSize: '20px',
        padding: '5px 15px',
        borderRadius: '20px',
        transition: 'background-color 0.2s ease, max-height 0.5s ease',
        maxHeight: dropDownOpen ? divSizeOpened : divSizeClosed,
        cursor: 'pointer',
        overflow: 'hidden',
        userSelect: 'none'
    };


    // Helper Functions
    function onHover(): void {
        setHoverState(lightenColor(primaryColor))
    }
    function onHoverExit(): void {
        setHoverState(primaryColor)
        setOptionsHover(generateOptionsBoolArray)
    }
    function hexToRGBArray(hex: string): number[] { // Converts a hex color to [R,G,B]
        let rgbVals: number[] = [];
        for (let i = 0; i < 3; i++) {
            let rgb = parseInt(hex[i * 2 + 1] + hex[i * 2 + 2], 16)
            if (rgb > 255) { rgb = 255 }
            rgbVals.push(rgb)
        }
        return rgbVals
    }
    function lightenColor(colorIn: string): string { // Takes a string and outputs a lighter version of it
        let srcRGBVals = hexToRGBArray(colorIn)
        let newRGBVals: number[] = [];
        for (let i = 0; i < 3; i++) {
            let newRGB = srcRGBVals[i] + 40
            if (newRGB > 255) { newRGB = 255 }
            newRGBVals.push(newRGB)
        }
        return (`rgb(${newRGBVals[0]}, ${newRGBVals[1]}, ${newRGBVals[2]})`)
    }
    function toggleDropDown(): void {
        setDropDownOpen(prev => !prev)
    }
    function generateOptionsBoolArray(): Boolean[] {
        let boolArray: Boolean[] = [];
        options.forEach(() => boolArray.push(false))
        return boolArray
    }
    function makeThisHover(index: number): void {
        setOptionsHover(prev => {
            return prev.map((item, itemIndex) => itemIndex === index ? true : false)
        })
    }


    // Maps out all the options in the dropdown menu
    const optionElements: any = options.map((item, index) => {
        return (
            <div
                key={index}
                onClick={() => setCurrentOption(item.value)}
                onMouseEnter={() => makeThisHover(index)}
                style={{
                    color: optionsHover[index] ? lightenColor(textColor) : textColor
                }}
            >{item.label}</div>)
    })


    return (
        <div style={menustyle}
            onMouseEnter={onHover}
            onMouseLeave={onHoverExit}
            onClick={toggleDropDown}


        >
            <div
                style={buttonstyle}
                ref={inputRef}
            >
                {options[options.findIndex(item => item.value === currentOption)].label}
                <div style={{ // Maybe make it a hollow triangle with rounded edges?
                    height: '15px',
                    display: 'flex',
                    transform: dropDownOpen ? '' : 'rotate(-180deg)',
                    transition: 'transform 250ms ease',
                    marginLeft: 'auto'
                }}>
                    <DropDownArrow fill="currentColor" />
                </div>
            </div>
            <div style={{ height: '1.5px', backgroundColor: textColor, margin: '5px 0px' }} />
            <div>
                {optionElements}
            </div>

        </div>
    );
}