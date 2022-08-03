import React from 'react';
import JSelect from './JForm'


export default function ScaleMenu() {

    const letteroptions: object[] = [ // USE a numToLet for loop once I get it working with useContext
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

    return (
        <div className="scale-menu">

            {/*     Elements:
                        - Select Letter (Dropdown)          scale-menu__letter
                        - Select Mode (Dropdown)            scale-menu__mode
                        - Show Sharps or Flats (Toggle)     scale-menu__is-sharp
                                                            ...not sure if I even need class names for these yet
            */}

            <label htmlFor="scale-menu__letter">Scale</label>
            <select id="scale-menu__letter" className="scale-menu__dropdown">
                <option value="0">Ab</option>
                <option value="1">A</option>
                <option value="2">Bb</option>
                <option value="3">B</option>
                <option value="4">C</option>
                <option value="5">Db</option>
                <option value="6">D</option>
                <option value="7">Eb</option>
                <option value="8">E</option>
                <option value="9">F</option>
                <option value="10">Gb</option>
                <option value="11">G</option>
            </select>


            {/* 
                    Might want to create a custom dropdown component. Might look like this:
                    <JSelect options={[item1,item2,...]} defaultValue={value} primaryColor='' textColor='' returnFunc={setXState}/>
            */}
            <JSelect />


        </div>
    )
}