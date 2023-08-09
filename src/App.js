
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
       <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/"><News key="general" pageSize={9} country="in" category="general"/></Route>
          <Route exact path="/business"><News key="business" pageSize={9} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={9} country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News key="general" pageSize={9} country="in" category="general"/></Route>
          <Route exact path="/helth"><News key="helth" pageSize={9} country="in" category="helth"/></Route>
          <Route exact path="/science"><News Key="science" pageSize={9} country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" pageSize={9} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" pageSize={9} country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

