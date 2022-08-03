import { text } from 'node:stream/consumers';
import React from 'react';
import { rootCertificates } from 'tls';
import { ReactComponent as DropDownArrow } from '../assets/DropDownArrow.svg';

export default function JSelect(props: any) {

    const defaultValue = 4;

    const primaryColor = '#87c6bb'; //only takes hex
    const textColor = '#2c3f43';

    const [currentOption, setCurrentOption] = React.useState(defaultValue);

    const [dropDownOpen, setDropDownOpen] = React.useState(false);

    interface Option { value: any, label: string; }
    const options: Option[] = [
        { value: 0, label: 'Ab' },
        { value: 1, label: 'A' },
        { value: 2, label: 'Bb' },
        { value: 3, label: 'B' },
        { value: 4, label: 'C' },
        { value: 5, label: 'Db' },
        { value: 6, label: 'D' },
        { value: 7, label: 'Eb' },
        { value: 8, label: 'E' },
        { value: 9, label: 'F' },
        { value: 10, label: 'Gb' },
        { value: 11, label: 'G' }
    ];

    // Styles
    const buttonstyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
    };

    const [tempState, setTempState] = React.useState(primaryColor)
    const menustyle: React.CSSProperties = {
        backgroundColor: tempState, //primaryColor
        color: textColor,
        fontWeight: '700',
        fontSize: '20px',
        padding: '5px 15px',
        borderRadius: '20px',
        cursor: 'pointer'
    };

    function onHover(): void {
        let rgbvalue = hexToRGBArray(primaryColor) // left off here

    }
    function onHoverExit(): void {

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

    // I'm gonna have to use CSS-IN-JS completely for this.
    // Since the menu's background is one div, I'll just change the font color (+ weight?) on hover.
    // I'll probably have to use state
    return (
        <div style={menustyle}
            onMouseEnter={() => setTempState(lightenColor(primaryColor))}
            onMouseLeave={() => setTempState(primaryColor)}
        >
            <div
                onClick={() => setDropDownOpen(prev => !prev)}
                style={buttonstyle}
            >
                {options.findIndex(item => item.value === currentOption)}
                <div style={{ // Maybe make it a hollow triangle with rounded edges?
                    height: '15px',
                    display: 'flex',
                    transform: dropDownOpen ? '' : 'rotate(-180deg)',
                    transition: 'transform 250ms ease',
                }}>
                    <DropDownArrow fill="currentColor" />
                </div>
            </div>
            {/* Should add a divider here */}
            <div>
                <div>Ab</div>
                <div>A</div>
                <div>Bb</div>
                <div>B</div>
                <div>C</div>
                <div>Db</div>
                <div>D</div>
                <div>Eb</div>
                <div>E</div>
                <div>F</div>
                <div>Fb</div>
                <div>G</div>
            </div>

        </div>
    );
}