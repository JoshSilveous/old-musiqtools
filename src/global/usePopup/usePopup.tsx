import React, { useEffect, useRef, useState } from "react"



function usePopup() {
    // breaking "best naming practice" here because it makes more sense.
    const [popupLocation, setPopupDisplayContent] = useState<JSX.Element[]>([])

    let currentContent: JSX.Element

    function setContent(content: JSX.Element) {
        currentContent = content
    }

    const containerRef = useRef<HTMLDivElement>(null)



    function trigger(e: React.MouseEvent<HTMLElement>) {
        // if content isn't defined, console log an error
        // if not, create a new div at the highest level using coordinates of user's mouse

        const popupStyle: React.CSSProperties = {
            position: 'absolute',
            left: `${e.pageX}px`,
            top: `${e.pageY}px`,
            zIndex: '50000',
            backgroundColor: 'red',
            // borderRadius: '20px',
            transition: 'width .2s ease, height .2s ease, border-radius .2s ease',
            overflow: 'hidden'
        }

        function clearPopup() {
            setPopupDisplayContent([
                <div
                    ref={containerRef}
                    style={{ ...popupStyle, height: '0px', width: '0px', borderRadius: '0px' }}
                >
                    <div style={{ padding: '20px' }}>
                        <div onClick={clearPopup}>close</div>
                        {currentContent}
                    </div>
                </div>
            ])
            let timeout = setInterval(() => {
                setPopupDisplayContent([])
            }, 200)
            clearInterval(timeout)
        }

        if (!currentContent) { console.log("Content not defined!") }
        else {
            setPopupDisplayContent([
                <div
                    ref={containerRef}
                    style={{ ...popupStyle, opacity: '0%' }}
                >
                    <div style={{ padding: '20px' }}>
                        <div onClick={clearPopup}>close</div>
                        {currentContent}
                    </div>
                </div>
            ])
            let layer1timeout = setTimeout(() => {
                let popupWidth = containerRef!.current!.clientWidth
                let popupHeight = containerRef!.current!.clientHeight
                console.log('width:', popupWidth)
                console.log('height:', popupHeight)

                setPopupDisplayContent([
                    <div
                        ref={containerRef}
                        style={{ ...popupStyle, opacity: '0%', height: '0px', width: '0px', borderRadius: '0px' }}
                    >
                        <div style={{ padding: '20px' }}>
                            <div onClick={clearPopup}>close</div>
                            {currentContent}
                        </div>
                    </div>
                ])

                let layer2timeout = setTimeout(() => {
                    setPopupDisplayContent([
                        <div
                            ref={containerRef}
                            style={{ ...popupStyle, opacity: '100%', width: `${popupWidth}px`, height: `${popupHeight}px`, borderRadius: '20px' }}
                        >
                            <div style={{ padding: '20px' }}>
                                <div onClick={clearPopup}>close</div>
                                {currentContent}
                            </div>
                        </div>
                    ])
                    clearTimeout(layer2timeout)
                }, 1)

                clearTimeout(layer1timeout)
            }, 1)
        }
    }


    return ({ trigger, popupLocation, setContent })
}

export { usePopup }