import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './components/common/css/move-base.css';
import './components/common/css/main.css';

import City from "./components/views/citys";
import Home from "./components/views/home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/citys' component={ City }></Route>
          <Route path='/' component={ Home }></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
