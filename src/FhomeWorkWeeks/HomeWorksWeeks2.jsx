import React, { useEffect, useState } from 'react'
import Listado from './Components/Listado'
import Formulario from './Components/Formulario'
// import { firebase } from './Components/Listado'

function HomeWorksWeeks2() {
    const [recarga, setRecarga] = useState(0)

    useEffect(() => {
        // console.log("prueba");
        const obtnerTareas = async () => {
            try {
                console.log("contenedor")
            } catch (error) {
                console.log("error al ir al firestore");
            }
        }

        obtnerTareas()
    }, [])
    return (
        <div className="container mt-3">
            <div className="row">
                <Listado recarga={recarga} setRecarga={setRecarga} />
                <Formulario recarga={recarga} setRecarga={setRecarga} />
            </div>
        </div>
    )
}

export default HomeWorksWeeks2;
