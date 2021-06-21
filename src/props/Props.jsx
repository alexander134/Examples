import React from 'react';
import Saludo from './Saludo'
import Comentario from './Comentario'

const Props = () => {
    const linkI="https://i.pinimg.com/originals/2a/ab/2e/2aab2ed83e96d95c50623f3aec9748f1.jpg"
    return (
        <>
        <div className="container mt-5">
            <Saludo nombre="alex" />
            <Saludo nombre="adriana" />
            <Saludo nombre="oswaldo" />
            <Saludo nombre="deniale" />
        </div>
        <div className="container">
            <Comentario comentario="esto es un comentario" link={linkI} titulo="esto es el titulo" />
            <Comentario comentario="esto es un comentario2" link={linkI} titulo="esto es el titulo2" />
            <Comentario comentario="esto es un comentario3" link={linkI} titulo="esto es el titulo3" />
        </div>
        </>
    );
};


export default Props;