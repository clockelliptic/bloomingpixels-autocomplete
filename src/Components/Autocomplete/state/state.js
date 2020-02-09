import React, { useReducer } from 'react'
import reducer from './reducer'
import { initialStore } from './config'


export const Store = React.createContext()


export function StoreProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialStore)
    const value = { state, dispatch }
    return (
        <Store.Provider value={value}>
            {children}
        </Store.Provider>
    )
}
