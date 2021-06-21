import React, { useEffect, useState } from 'react';


const Contactos = () => {
    
    const [dataNen,setDataNen]= useState([])
    const [dataAlbun,setDataAlbun]= useState([])
    
    useEffect(()=>{
        console.log("start")
        obtenerDatos()
    },[])
    
    const obtenerDatos = async()=>{
        const data= await fetch('https://jsonplaceholder.typicode.com/users')
        const user =await data.json()
        // console.log(user);
        setDataNen(user)
    }

    const obtenerAlbuns = async()=>{
        const data2= await fetch('https://jsonplaceholder.typicode.com/comments')
        const albunes= await data2.json()
        setDataAlbun(albunes)
    }

    return (
        <div className="container-fluid">
           {/* <lu> */}
               {
                   dataNen.map(item=>(
                       <li key={item.id}>{item.name}</li>
                   ))
               }
           {/* </lu> */}
           <br/>
           <hr/>

           <button className="btn btn-primary float-right mb-3"  onClick={()=>obtenerAlbuns()}>btn genera tabla</button>

        <table className='table'>
                <th>postId</th>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>body</th>
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
        </table>
        
        </div>
    );
};


export default Contactos;