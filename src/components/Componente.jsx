import React, { useState } from 'react'

const Componente = () => {
    const [input1,setInput1]=useState("")
    const [input2,setInput2]=useState("")
    const guardarDatos = (e) => {
        e.preventDefault()

        if(!input1.trim()){
            console.log("esta vacio el campo1")
        }else if(!input2.trim()){
            console.log("esta vacio el campo2")
        }else{
            console.log(input1,input2)    
        }
        e.target.reset()
        setInput1("")
        setInput2("")
    }
    return (
        <>
            <h1>prueba PC EVE</h1>
            <form onSubmit={ guardarDatos }>
                <input onChange={e=> setInput1(e.target.value)} className="form-control mb-2" placeholder="ingrese valor" type="text" />
                <input onChange={e=> setInput2(e.target.value)} className="form-control  mb-2" placeholder="ingrese descripcion" type="text" />
                <button type="submit" className="btn btn-primary btn-block" >enviar</button>
            </form>
        </>
    )
}

export default Componente;