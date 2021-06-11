import React from 'react'

const Parrafo = () => {
const fucntionEvento =(num)=>{
    console.log("nombmbre"+num)
}

    return (
        <>
            <h1>hola mundosssssss</h1>
            <button onClick={fucntionEvento}>llamar</button>
            <button onClick={ () =>fucntionEvento('alx')}>llamar2</button>
        </>
    )
}

export default Parrafo;