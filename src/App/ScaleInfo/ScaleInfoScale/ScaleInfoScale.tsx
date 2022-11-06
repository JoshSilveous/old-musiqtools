import { ScaleStatePropsType } from '../../../global/Types'
import './ScaleInfoScale.css'

function ScaleInfoScale({ scaleState }: ScaleStatePropsType) {
    function highlightThis(index: number) {
        // Maps through current highlightedNotes, finds the one that was selected, and inverts it's value
        scaleState.setHighlightedNotes(prev => prev.map((item, thisindex) => index === thisindex ? !item : item))
    }
    const scaleLetDisplay = scaleState.scaleLet.map((note, index) => {
        return (
            <div
                className='note'
                key={index}
                style={{ backgroundColor: scaleState.highlightedNotes[scaleState.scaleLetOptions.indexOf(note)] ? 'var(--background3)' : '' }}
                onMouseDown={() => highlightThis(scaleState.scaleLetOptions.indexOf(note))}
            >
                <span>{note}</span>
            </div>)
    })
    return (
        <div className='scaleinfoscale-container'>
            {scaleLetDisplay}
        </div>
    )
}
export default ScaleInfoScale