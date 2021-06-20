import React from 'react';

const Comentario = (props) => {
    const {titulo,comentarios,link}=props
    return (
        <div className="media">
            <img style={{height:100,width:100}} src={link} className="mr-3" alt="" />
            <div className="media-body">
                <h5 className="mt-0">{titulo}</h5>
                {comentarios}
            </div>
        </div>
    );
};


export default Comentario;