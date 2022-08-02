import React from 'react';

export default function JSelect(props: any) {

    const defaultValue = 4

    const className = "jselect"

    const [currentOption, setCurrentOption] = React.useState(defaultValue)


    interface Option { value: any, label: string }
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
    ]

    // Styles
    const buttonstyle: React.CSSProperties = {
        display: 'inline',
        padding: '5px 15px',
        borderRadius: '20px'
    }

    const menustyle: React.CSSProperties = {
        backgroundColor: 'inherit'
    }

    const itemstyle: React.CSSProperties = {

    }


    return (
        <div>
            <div className={className} style={buttonstyle}>       {/* Menu toggle */}
                {options.findIndex(item => item.value === currentOption)}
                {/* put a lottie here for the arrow icon, which can be triggered via react */}
            </div>
            <div style={menustyle}>
                <div style={itemstyle}>Ab</div>
                <div style={itemstyle}>A</div>
                <div style={itemstyle}>Bb</div>
                <div style={itemstyle}>B</div>
                <div style={itemstyle}>C</div>
                <div style={itemstyle}>Db</div>
                <div style={itemstyle}>D</div>
                <div style={itemstyle}>Eb</div>
                <div style={itemstyle}>E</div>
                <div style={itemstyle}>F</div>
                <div style={itemstyle}>Fb</div>
                <div style={itemstyle}>G</div>
            </div>
        </div>
    )
}