import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';

// Custom hook , retorna un estado inicial que carga las imagenes (gifs).

export const useFetchGifs = ( categoria ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        //? Se ejecuta solo cuando el Componente es renderizado por primera vez
        getGifs( categoria )
            .then( imgs  => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [categoria]) //? Se dispara nuevamente cuando la categoria cambia

    return state; // { data: [] , loading: true };
}
