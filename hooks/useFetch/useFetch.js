import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loadin: true, error: null})

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect( ()=> {

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if (isMounted.current) {
                    setState({
                        loadin: false,
                        error: null,
                        data
                    })
                }
                

            })
            .catch(() => setState({data: null, loadin: true, error: 'No se puedo cargar la info'}))

    },[url] )

    return state;
}
