import React, {useState} from 'react'

const Lista = () => {

    const estadoiniciarArray=[
        {id:1,texto:'tarea 1'},
        {id:2,texto:'tarea 2'},
        {id:3,texto:'tarea 3'},
        {id:4,texto:'tarea 4'},
    ]

    let arrayUno=['Chile','Venezuela']
    let arrayDos=['Uruguay','Peru']
    let arrayTres=['Comlombia','Argentina']


    let arraySimple=['caracas','santiago']
    let arrayObjeto=[
        {id:1,nombre:'alexander '},
        {id:2,nombre:'adriana '},
        {id:3,nombre:'Fernando '},
        {id:4,nombre:'luis '},
    ]
    let arrayObjetoDos=[ 'array simple',
        {id:1,texto:'tarea '},
        {id:2,texto:'tarea '},
        {id:3,texto:'tarea '},
        {id:4,texto:'tarea '},
    ]

    // const unidosArray =[...arrayUno,...arrayDos,...arrayTres]
    // const unidosArrayComplejo =[...arraySimple,...arrayObjeto,...arrayObjetoDos]
    const [lista, setLista] = useState(estadoiniciarArray)
    // const [arrayUnidos, setarrayUnidos] = useState(unidosArray)
    // const [arrayUnidosObjetos, setarrayUnidosObjetos] = useState(unidosArrayComplejo)

    const agregarPrimerArray = ()=>{
        let count= lista.length
        console.log(count)
        setLista([
            ...lista,
            {
                id:count+1, texto:'tarea '+(count+1)
            }
        ])
    }

    return (
        <div>
            <h1>Array Objeto</h1>
            {
                lista.map((item,index)=>(
                    <h4 key={item.id}>{item.texto}</h4>
                ))
            }
            <button onClick={()=>agregarPrimerArray()} >agregar al primer array</button>
            {/* <h1>Array Unido con otros Array</h1>
            {
                arrayUnidos.map((item,index)=>(
                    <h4 key={index}>{item}</h4>
                ))
            } */}
            {/* <h1>Array Objeto Unido con otros Array Objeto y array simple</h1>
            {
                arrayUnidosObjetos.map((item,index)=>(
                    <h4 key={item.id}>
                        {item.nombre}
                        {item.texto}
                    </h4>
                ))
            } */}
        </div>
    )
}

export default Lista
