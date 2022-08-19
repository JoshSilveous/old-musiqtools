import React from 'react'
import './App.css'
import ScaleMenu from './components/Menu'
import { ScaleContextConsumer } from './ScaleContext'

function App() {

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