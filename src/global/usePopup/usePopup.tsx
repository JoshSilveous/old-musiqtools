import React, { useEffect, useRef, useState } from "react"



function usePopup(currentContent: JSX.Element, style?: React.CSSProperties, className?: string) {
    // breaking "best naming practice" here because it makes more sense.
    const [popupLocation, setPopupDisplayContent] = useState<JSX.Element[]>([])

    const containerRef = useRef<HTMLDivElement>(null)



    function trigger(e: React.MouseEvent<HTMLElement>) {
        // if content isn't defined, console log an error
        // if not, create a new div at the highest level using coordinates of user's mouse
        // if user clicks anywhere while window is open, close it


        let popupStyle: React.CSSProperties = {
            ...style,
            position: 'absolute',
            zIndex: '50000',
            transition: 'width .2s ease, height .2s ease, border-radius .2s ease',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
        }

        window.addEventListener('resize', clearPopup)

        let timeout3 = setInterval(() => {
            window.addEventListener('click', clearPopup)
            console.log('added')
            clearInterval(timeout3)
        }, 0)

        function clearPopup() {
            console.log('clearPopup() trigered')
            setPopupDisplayContent([
                <div
                    ref={containerRef}
                    className={className}
                    style={{
                        ...popupStyle,
                        height: '0px',
                        width: '0px',
                        borderRadius: '0px'
                    }}
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
            window.removeEventListener('resize', clearPopup)
            window.removeEventListener('click', clearPopup)
            clearInterval(timeout)
        }

        if (!currentContent) { console.log("Content not defined!") }
        else {
            setPopupDisplayContent([
                <div
                    ref={containerRef}
                    className={className}
                    style={{ ...popupStyle, opacity: '0%' }}
                >
                    <div style={{ padding: '20px' }}>
                        <div onClick={clearPopup}>close</div>
                        {currentContent}
                    </div>
                </div>
            ])
            let layer1timeout = setTimeout(() => {

                // problem: doesn't take into account that user may not be scrolled to the bottom. should use window position
                let popupWidth = containerRef!.current!.clientWidth
                let popupHeight = containerRef!.current!.clientHeight
                const verticalOverflow = e.pageY + popupHeight > document.body.scrollHeight - 100
                const horizontalOverflow = e.pageX + popupWidth > document.body.scrollWidth - 100

                function positionPopup() {
                    if (verticalOverflow) {
                        popupStyle.top = ''
                        let offset = window.innerHeight - e.pageY
                        popupStyle.bottom = offset
                    }
                    else {
                        popupStyle.top = `${e.pageY}px`
                    }

                    if (horizontalOverflow) {
                        popupStyle.left = ''
                        let offset = document.documentElement.clientWidth - e.pageX
                        popupStyle.right = offset
                    }
                    else {
                        popupStyle.left = `${e.pageX}px`
                    }
                }
                positionPopup()


                setPopupDisplayContent([
                    <div
                        ref={containerRef}
                        className={className}
                        style={{
                            ...popupStyle,
                            opacity: '0%',
                            height: '0px',
                            width: '0px',
                            borderRadius: '0px'
                        }}
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
                            className={className}
                            style={{ ...popupStyle, ...style, opacity: '100%', width: `${popupWidth}px`, height: `${popupHeight}px`, borderRadius: '20px' }}
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


    return ({ trigger, popupLocation })
}

export { usePopup }