import React from 'react'

// Este componente muestra la imagen y su titulo
export const GifGridItem = ( { title, url} ) => {

    return (
        <div className="card animate__animated animate__fadeInLeft animate__slow">
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
            
        </div>
    )
}
