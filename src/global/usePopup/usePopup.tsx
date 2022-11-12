import React from "react"

function usePopup() {

    let defaultContent = <div></div>

    let content: JSX.Element

    function trigger(e: any) {
        // if content isn't defined, console log an error
        // if not, create a new div at the highest level using coordinates of user's mouse

        console.log(React.createElement)
    }

    return ({ trigger })
}

export { usePopup }