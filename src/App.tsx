import React from 'react'
import './App.css'
import ScaleMenu from './components/Menu'
import { ScaleContextConsumer } from './ScaleContext'

function App() {




    // State used throughout the whole application to decide if it should
    // display sharp or flat symbols
    const [isSharp, setIsSharp] = React.useState(false)

    console.log(ScaleContextConsumer)

    var reference: string[] = ['Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G']
    if (isSharp) {
        reference = ['G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G']
    }

    // console.log(numToLet([1, 2, 3]))
    return (
        <div className="App">
            <h1>MusiqTools</h1>
            <p>A straightforward app designed to make producing music less of a headache.</p>
            <ScaleContextConsumer>
                {context => (
                    <ScaleMenu context={context} />
                )}
            </ScaleContextConsumer>


        </div>
    )
}

export default App
export var reference: string[]