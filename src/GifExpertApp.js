import React, { useState } from 'react'
import AddCategoria from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One punch']);

    return (
        <div>
            <h1>GifExpertApp</h1>
            <AddCategoria setCategorias={ setCategorias }/>
            <hr/>


            <ol>
                {
                    categorias.map( categoria => (
                        <GifGrid 
                            key={ categoria } 
                            categoria={categoria}
                        />
                    
                    ))
                }
            </ol>
        </div>
    )
}

