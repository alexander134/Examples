import React from 'react';

const Saludo = (props) => {
    const {nombre}=props
    return (
        <div>
            saludando {nombre}
        </div>
    );
};


export default Saludo;