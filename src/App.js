 import React, { Component } from 'react'
import Contador from './components/Contador'
import Lista from './components/Lista'
import Parrafo from './components/Parrafo'
import Componente from './components/Componente'

function App() {
  return (
    <div>
      <Parrafo/>
      <Contador/>
      <Lista/>
      <Componente/>
    </div>
  );
}

export default App;
