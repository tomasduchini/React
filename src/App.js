import React from 'react';
import './App.css';
import Nav from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer'

function App() {
  return <>
    <Nav/>
    <ItemListContainer greeting="Texto Provisional"/>
  </>;
}

export default App;
