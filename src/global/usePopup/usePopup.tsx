import React, { useState } from "react"



function usePopup() {
    // breaking "best naming practice" here because it makes more sense.
    const [popupLocation, setPopupDisplayContent] = useState<JSX.Element[]>([])

    let currentContent: JSX.Element

    function setContent(content: JSX.Element) {
        currentContent = content
    }

    function trigger(e: React.MouseEvent<HTMLElement>) {
        // if content isn't defined, console log an error
        // if not, create a new div at the highest level using coordinates of user's mouse

        const popupStyle: React.CSSProperties = {
            position: 'absolute',
            left: `${e.pageX}px`,
            top: `${e.pageY}px`,
            zIndex: '50000',
            backgroundColor: 'red',
            padding: '20px',
            boxSizing: 'border-box',
            // borderRadius: '20px',
            transition: 'scale 0.2s ease, height 0.2s ease',
            overflow: 'hidden'
        }

        function clearPopup() {
            setPopupDisplayContent([])
        }

        if (!currentContent) { console.log("Content not defined!") }
        else {
            setPopupDisplayContent([
                <div style={{ ...popupStyle, scale: '0' }}>
                    <div onClick={clearPopup}>close</div>
                    {currentContent}
                </div>
            ])
            setTimeout(() => {
                setPopupDisplayContent([
                    <div style={{ ...popupStyle, scale: '1' }}>
                        <div onClick={clearPopup}>close</div>
                        {currentContent}
                    </div>
                ])
            }, 1)

        }

    }

    return ({ trigger, popupLocation, setContent })
}

export { usePopup }