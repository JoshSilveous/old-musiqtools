import { ScaleStatePropsType } from "../../../global/Types"

function ScaleInfoScale({ scaleState }: ScaleStatePropsType) {
    function highlightThis(index: number) {
        // Maps through current highlightedNotes, finds the one that was selected, and inverts it's value
        scaleState.setHighlightedNotes(prev => prev.map((item, thisindex) => index === thisindex ? !item : item))
    }
    const scaleLetDisplay = scaleState.scaleLet.map((item, index) => {
        return (
            <div
                className='scale-info__scale__item'
                key={index}
                style={{ backgroundColor: scaleState.highlightedNotes[scaleState.scaleLetOptions.indexOf(item)] ? 'var(--background3)' : '' }}
                onMouseDown={() => highlightThis(scaleState.scaleLetOptions.indexOf(item))}
            >
                {item}
            </div>)
    })
    return (
        <div className='scale-info__scale'>
            {scaleLetDisplay}
        </div>
    )
}
export default ScaleInfoScale