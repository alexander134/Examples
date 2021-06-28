import React,{ useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';

const Civilizacion = () => {
    const {id}=useParams()
    
    const [dataCivilizacion,setDataCivilizacion]= useState([])
    const [dataCivilizacionBonus,setDataCivilizacionBonus]= useState([])
    useEffect(()=>{
        const obtenerCiviliacion = async()=>{
            const data= await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const dataJson =await data.json()
            // console.log(dataJson);
            setDataCivilizacion(dataJson)
            setDataCivilizacionBonus(dataJson.civilization_bonus)
            // console.log(dataCivilizacionBonus);
        }
        obtenerCiviliacion()
    },[id])

    
    return (
        <div className="container-fluid">
           <h3>{dataCivilizacion.name}</h3>
           <p>expansion: {dataCivilizacion.expansion}</p>
           <p>army_type: {dataCivilizacion.army_type}</p>
           <p>team_bonus: {dataCivilizacion.team_bonus}</p>
           {/* <p>team_bonus: {dataCivilizacion.civilization_bonus}</p> */}
           {
               dataCivilizacionBonus.map((item, index)=>(
                <li key={index}>
                    {item}
                </li>
            )) 
           }
        </div>
    );
};


export default Civilizacion;