import './App.css'
import ScaleInfo from './components/ScaleInfo'
import ScaleMenu from './components/ScaleMenu'
import { ScaleContextConsumer } from './ScaleContext'

function App() {

    return (
        <div className="App">
            <h1>MusiqTools</h1>
            <p>A straightforward app designed to make producing music less of a headache.</p>
            <ScaleContextConsumer>
                {context => (
                    <>
                        <div style={{ backgroundColor: 'red', padding: '30px', borderRadius: '15px' }}>
                            <ScaleMenu context={context} />
                        </div>
                        <ScaleInfo context={context} />
                    </>
                )}
            </ScaleContextConsumer>

        </div>
    )
}

export default App
export var reference: string[]