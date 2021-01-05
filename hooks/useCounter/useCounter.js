import { useState } from "react"


export const useCounter = ( initialValue=0 ) => {
    const [state, setstate] = useState(initialValue)

    const increment = () => { setstate(state + 1 ) }
    const drecrement = () => { setstate(state - 1 ) }
    const reset = () => { setstate( initialValue ) }

    return {
        state,
        increment,
        drecrement,
        reset
    }
} 


