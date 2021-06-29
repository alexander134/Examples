import React, { useEffect, useState } from 'react'
import { firebase } from './firebase'

function HomeWorksWeeks() {
    const [tareas, setTareas] = useState([])
    const [tarea, setTarea] = useState("")
    const [descripcionTarea, setDescripcionTarea] = useState("")
    const [idTarea, setIdTarea] = useState("")
    const [validaInputAgregar, setFalidaInputAgregar] = useState(false)
    const [validaInputAgregarDes, setFalidaInputAgregarDes] = useState(false)
    const [modoEdicion, serModoEdicion] = useState(false)

    useEffect(() => {
        // console.log("prueba");
        const obtnerTareas = async () => {
            try {
                const db = firebase.firestore()
                const data = await db.collection('homeWork').get()
                // console.log(data.docs);
                const arrayData = await data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                // console.log(arrayData);
                setTareas(arrayData)
            } catch (error) {
                console.log("error al ir al firestore");
            }
        }

        obtnerTareas()
    }, [])

    const agregarTarea = async (e) => {
        e.preventDefault()

        if (!tarea.trim()) {
            setFalidaInputAgregar(true)
            return
        }
        setFalidaInputAgregar(false)
        if (!descripcionTarea.trim()) {
            setFalidaInputAgregarDes(true)
            return
        }
        setFalidaInputAgregarDes(false)
        try {
            const db = firebase.firestore()
            const nuevaTarea = {
                name: tarea,
                fecha: Date.now(),
                descripcion: descripcionTarea
            }
            const data = await db.collection('homeWork').add(nuevaTarea)
            setTareas([
                ...tareas,
                { ...nuevaTarea, id: data.id }
            ])
            setTarea('')
            setDescripcionTarea('')
        } catch (error) {
            console.log(error);
        }
    }

    const eliminarTarea = async (id) => {
        try {
            const db = firebase.firestore()
            await db.collection('homeWork').doc(id).delete()
            const arrayFiltrado = tareas.filter(item => item.id !== id)
            setTareas(arrayFiltrado)
        } catch (error) {
            console.log(error);
        }
    }

    const editarTarea = async (e) => {
        e.preventDefault()
        if (!tarea.trim()) {
            setFalidaInputAgregar(true)
            return
        }
        setFalidaInputAgregar(false)
        if (!descripcionTarea.trim()) {
            setFalidaInputAgregarDes(true)
            return
        }
        setFalidaInputAgregarDes(false)
        try {
            const db = firebase.firestore()
            await db.collection('homeWork').doc(idTarea).update({
                name: tarea,
                descripcion: descripcionTarea
            })
            const arraEditado = tareas.map(item => (
                item.id === idTarea ? { id: item.id, fecha: item.fecha, descripcion: descripcionTarea, name: tarea } : item
            ))
            setTareas(arraEditado)
            serModoEdicion(false)
            setTarea('')
            setDescripcionTarea('')
            setIdTarea('')
        } catch (error) {
            console.log(error);
        }
    }

    const activarEditarTarea = (item) => {
        serModoEdicion(true)
        setIdTarea(item.id)
        setTarea(item.name)
        setDescripcionTarea(item.descripcion)
    }

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6">
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
                <div className="col-md-6">
                    <h3 className={modoEdicion ? "text-warning text-center" : "text-primary text-center"}>
                        {
                            modoEdicion ? "Editar Tarea" : "Agregar Tarea"
                        }
                    </h3>
                    <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
                        {validaInputAgregar && (
                            <div className="alert alert-warning" role="alert">debe ingresar una tarea</div>
                        )}
                        <input type="text" placeholder="Ingrese Tarea" className="form-control mb-2" onChange={e => setTarea(e.target.value)} value={tarea} />
                        {validaInputAgregarDes && (
                            <div className="alert alert-warning" role="alert">debe ingresar la descrición de la tarea</div>
                        )}
                        <textarea className="form-control  mb-2" rows="3" placeholder="Ingrese la descripción de la tarea" onChange={e => setDescripcionTarea(e.target.value)} value={descripcionTarea}></textarea>
                        <button className={modoEdicion ? "btn btn-warning btn-block" : "btn btn-dark btn-block"} type="submit">{modoEdicion ? "Editar" : "Agregar"}</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default HomeWorksWeeks;
