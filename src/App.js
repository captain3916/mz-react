import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './components/common/css/move-base.css';
import './components/common/css/main.css';

import City from "./components/views/citys";
import Home from "./components/views/home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/films' component={ Home }></Route>
          <Route path='/citys' component={ City }></Route>
          <Redirect to='/films'></Redirect>
        </Switch>
      </Router>
    )
  }
}

export default App
