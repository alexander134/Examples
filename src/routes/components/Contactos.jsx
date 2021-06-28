import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";


const Contactos = () => {
    
    const [dataNen,setDataNen]= useState([])
    // const [dataAlbun,setDataAlbun]= useState([])
    const [dataCivilizacion,setDataCivilizacion]= useState([])
    useEffect(()=>{
        // console.log("start")
        obtenerDatos2()
    },[])
    
    // const obtenerDatos = async()=>{
    //     const data= await fetch('https://jsonplaceholder.typicode.com/users')
    //     const user =await data.json()
    //     setDataNen(user)
    // }
    const obtenerDatos2 = async()=>{
        const data= await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const dataJson =await data.json()
        // console.log(dataJson);
        setDataNen(dataJson.civilizations)
    }
    const obtenerCiviliacion = async()=>{
        const data= await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const dataJson =await data.json()
        // console.log(dataJson);
        setDataCivilizacion(dataJson.civilizations)
    }

    // const obtenerAlbuns = async()=>{
    //     const data2= await fetch('https://jsonplaceholder.typicode.com/comments')
    //     const albunes= await data2.json()
    //     setDataAlbun(albunes)
    // }

    return (
        <div className="container-fluid">
           {/* <lu> */}
               {
                   dataNen.map(item=>(
                       <li key={item.id}>
                           <Link to={`/contactos/${item.id}`}>
                           {item.name} - {item.expansion}
                           </Link>
                           
                        </li>
                    //  En caso del primero json usuarios  <li key={item.id}>{item.name}</li>
                   ))
               }
           {/* </lu> */}
           <br/>
           <hr/>

           <button className="btn btn-primary float-right mb-3"  onClick={()=>obtenerCiviliacion()}>btn genera tabla</button>
           {/* <button className="btn btn-primary float-right mb-3"  onClick={()=>obtenerAlbuns()}>btn genera tabla</button> */}

        <table className='table'>
                {/*
                EN EL CASO DEL PRIMER JSON
                <thead>
                    <tr>
                <th>postId</th>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
                 </tr>
                </thead>
                <tbody>
                {
                    dataAlbun.map(element=>(
                        <tr key={element.id}>
                            <td>{element.postId}</td>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.email}</td>
                            <td>{element.body}</td>
                        </tr>
                    ))
                } 
                </tbody>
                */}
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>expansion</th>
                        <th>army_type</th>
                        <th>team_bonus</th>
                        <th>accion</th>
                    </tr>
                </thead>
                <tbody>
                {
                    dataCivilizacion.map(element=>(
                        <tr key={element.id}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.expansion}</td>
                            <td>{element.army_type}</td>
                            <td>{element.team_bonus}</td>
                            <td>
                            <Link to={`/contactos/${element.id}`} className="btn btn-primary">IR</Link>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
        </table>
        
        </div>
    );
};


export default Contactos;