import './App.css'
import ScaleInfo from './ScaleInfo/ScaleInfo'
import ScaleMenu from './ScaleMenu/ScaleMenu'
import useScale from './useScale'

function App() {
    const scaleState = useScale()
    // console.log(scaleState)
    // eslint-disable-next-line
    return (
        <div className="app">
            <h1>MusiqTools</h1>
            <p className="tagline">A straightforward app designed to make producing music less of a headache.</p>
            <ScaleMenu scaleState={scaleState} />
            <ScaleInfo scaleState={scaleState} />

        </div>
    )
}

export default App