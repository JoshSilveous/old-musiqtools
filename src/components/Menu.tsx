import React from 'react';


export default function ScaleMenu() {
    return (
        <div className="scale-menu">

            {/*     Elements:
                        - Select Letter (Dropdown)          scale-menu__letter
                        - Select Mode (Dropdown)            scale-menu__mode
                        - Show Sharps or Flats (Toggle)     scale-menu__is-sharp
                                                            ...not sure if I even need class names for these yet
            */}

            <label htmlFor="scale-menu__letter">Scale:</label>
            <select id="scale-menu__letter">
                { }
            </select>


        </div>
    )
}