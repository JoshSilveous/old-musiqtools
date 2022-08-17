import React from 'react'


const { Provider, Consumer } = React.createContext<ScaleContextProviderType>({ scaleLet: [], scaleNum: [] })


type ScaleContextProviderProps = {
    children: JSX.Element | JSX.Element[]
}

export type ScaleContextProviderType = {
    scaleLet: string[]
    scaleNum: number[]
}

function ScaleContextProvider({ children }: ScaleContextProviderProps): JSX.Element {
    return (
        <Provider value={
            { scaleLet: ["hello"], scaleNum: [1, 2, 3] }
        }>
            {children}
        </Provider>
    )
}

export { ScaleContextProvider, Consumer as ScaleContextConsumer }