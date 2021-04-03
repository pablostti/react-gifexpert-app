import React, { useState } from 'react';
import PropTypes from 'prop-types';



const AddCategoria = ( {setCategorias} ) => {

    const [inputValue, setInputValue] = useState('');
    
    // onChange Input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategorias( cats => [inputValue, ...cats])
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
        
    )
}

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategoria;

