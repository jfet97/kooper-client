import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import Testo from './containers/Testo'
import './App.css';

class App extends Component {

  render() {

   

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/testo' component={Testo} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
