import React,{useState} from 'react'
import shortid from 'shortid'
// import Contador from './components/Contador'
// import Lista from './components/Lista'
// import Parrafo from './components/Parrafo'
// import Componente from './components/Componente'

function App() {
  const [tarea,setTarea]=useState('')
  const [listaTarea,setListaTarea]=useState([])
  const [modoEditar,setModoEditar]=useState(false)
  const [idTareaS,setIdTareaS]=useState('')

  const guardarTarea=(e)=>{
    e.preventDefault()
    if(!tarea.trim()){
      console.log("Elemento Vacio")
      return
    }
    // console.log(tarea)
    // e.target.reset() OR setTarea('')
    setListaTarea([
      ...listaTarea,{
        idTarea:shortid.generate(),
        nombreTarea:tarea
      }
    ])
    
    setTarea('')
  }

  const eliminar =(id)=>{
    let arryFiltrado=listaTarea.filter(item=> item.idTarea !== id)
    // console.log(arryFiltrado)
    setListaTarea(arryFiltrado)
  }
  const editar =(tareaCom)=>{
    console.log(tareaCom)
    setTarea(tareaCom.nombreTarea)
    setModoEditar(true)
    setIdTareaS(tareaCom.idTarea)
  }

  const editarTarea = e =>{
    e.preventDefault()
    if(!tarea.trim()){
      console.log("Elemento Vacio")
      return
    }

    let arrayEditado = listaTarea.map(item => item.idTarea === idTareaS ? {idTarea:idTareaS,nombreTarea:tarea}:item)
    setListaTarea(arrayEditado)
    setModoEditar(false)
    setTarea('')
    setIdTareaS('')
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center   " >CRUD Simple</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
              listaTarea.map((item,index)=>(
                <li className="list-group-item" key={item.idTarea} >
                  <span className="lead">{item.nombreTarea}</span>
                  <button onClick={()=>eliminar(item.idTarea)} className="btn btn-danger btn-sm float-right">Eliminar</button>
                  <button onClick={()=>editar(item)} className="btn btn-warning btn-sm float-right mx-2">Editar</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            {modoEditar ? 'Editar Tarea' : 'Agregar Tarea'}
          </h4>
          <form onSubmit={ modoEditar ? editarTarea : guardarTarea } >
            <input type="text" className="form-control mb-2" value={tarea} onChange={e=> setTarea(e.target.value)} placeholder="Ingrese Nombre Tarea"/>
            {modoEditar ? (
              <button className="btn btn-warning btn-block" type="submit" >Editar Tarea</button>
            ) : (
              <button className="btn btn-dark btn-block" type="submit" >Agregar Tarea</button>
            ) }
            
          </form>
        </div>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Parrafo/>
//       <Contador/>
//       <Lista/>
//       <Componente/>

//     </div>
//   );
// }
export default App;
