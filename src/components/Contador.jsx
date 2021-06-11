import React from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0)
    const [respuesta, setRespuesta] = React.useState('')

    const operacion= (ope)=>{
        if(ope==='+'){
            setRespuesta('')
            setContador(contador+1)
        }else if(ope==='-'){
            if(contador===0){
                setRespuesta('no puedes restar, por que el limite es 0')
            }else{
                setContador(contador-1)
            }
        }
    }
    return (
        <div>
            <h2>Contador</h2>
            <h4>{respuesta}</h4>
            <h3>nuestro numero aumentado: {contador}</h3>
            <button onClick={()=>operacion('+')} >sumar</button>
            <button onClick={()=>operacion('-')}>restar</button>
        </div>
    )
}

export default Contador
