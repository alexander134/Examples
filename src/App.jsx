import React from 'react'
// import HomeWorksWeeks from './FhomeWorkWeeks/HomeWorksWeeks'//only component
import HomeWorksWeeks from './FhomeWorkWeeks/HomeWorksWeeks2'//for components

function App() {
  return (
    <div>
      <div className="col-sm-12">
        <h2 className="text-center text-info">Tareas Asignadas</h2>
      </div>
      <HomeWorksWeeks />
    </div>
  )
}

export default App;
