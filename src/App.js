import React from 'react';
import './App.css';
import Nav from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return <>
    <Router>
      <Nav />
      <Switch>
        <Route exact path = "/">
          <ItemListContainer />
        </Route>
      </Switch>
    </Router>
  </>;
}

export default App;
