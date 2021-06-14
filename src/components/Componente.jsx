import React, { useState } from 'react'

const Componente = () => {
    const [input1,setInput1]=useState("")
    const [input2,setInput2]=useState("")
    const  [lista,setLista]=useState([])
    const guardarDatos = (e) => {
        e.preventDefault()

        if(!input1.trim()){
            console.log("esta vacio el campo1")
            return
        }else if(!input2.trim()){
            console.log("esta vacio el campo2")
            return
        }else{
            console.log(input1,input2)    
        }
        setLista([
            ...lista,{
                input1:input1,
                input2:input2
            }
        ])

        e.target.reset()
        setInput1("")
        setInput2("")
    }
    const llamalista=()=>{
        console.log(lista)
    }
    
    return (
        <>
            <h1>prueba PC EVE</h1>
            <form onSubmit={ guardarDatos }>
                <input onChange={e=> setInput1(e.target.value)} className="form-control mb-2" placeholder="ingrese valor" type="text" />
                <input onChange={e=> setInput2(e.target.value)} className="form-control  mb-2" placeholder="ingrese descripcion" type="text" />
                <button type="submit" className="btn btn-primary btn-block" >enviar</button>
                <button type="button" onClick={()=>llamalista()} className="btn btn-primary btn-block" >visualizar lista</button>
            </form>
            <ul>
                {
                    
                   lista.map((item, index)=>(
                       <li key={index}>
                           {item.input1} --- {item.input2} 
                       </li>
                   )) 
                }
            </ul>
        </>
    )
}

export default Componente;