import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase'

function Listado(props) {
    const { recarga, setRecarga } = props;
    const [tareas, setTareas] = useState([])

    useEffect(() => {
        const obtnerTareas = async () => {
            try {
                const db = firebase.firestore()
                const data = await db.collection('homeWork').get()
                const arrayData = await data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                setTareas(arrayData)
            } catch (error) {
                console.log("error al ir al firestore");
            }
        }
        obtnerTareas();
        if (recarga === 1) {
            setRecarga(0)
        }
    }, [recarga])


    const eliminarTarea = async (id) => {
        // console.log("eliminarTarea")
        try {
            const db = firebase.firestore()
            await db.collection('homeWork').doc(id).delete()
            const arrayFiltrado = tareas.filter(item => item.id !== id)
            setTareas(arrayFiltrado)
        } catch (error) {
            console.log(error);
        }
    }

    const activarEditarTarea = (item) => {
        console.log("activarEditarTarea")
        // serModoEdicion(true)
        // setIdTarea(item.id)
        // setTarea(item.name)
        // setDescripcionTarea(item.descripcion)
    }
    return (
        <div className="col-md-6">
            {/* <h1>({recarga})</h1> */}
            <ul className="list-group">
                {
                    tareas.map(item => (
                        <li className="list-group-item" key={item.id}>
                            {item.name}
                            <button className="btn btn-danger btn-sm float-right" onClick={() => eliminarTarea(item.id)}>
                                Eliminar
                            </button>
                            <button className="btn btn-warning btn-sm float-right mr-2" onClick={() => activarEditarTarea(item)}>
                                Editar
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Listado;
