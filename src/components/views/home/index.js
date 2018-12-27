import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../../common/NavBar';
import Films from './films';
import Cinemas from './cinemas';
import TeamBuy from './teamBuy';
import Me from './me';

class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path={`${this.props.match.path}films`} component={Films}></Route>
          <Route path={`${this.props.match.path}cinemas`} component={Cinemas}></Route>
          <Route path={`${this.props.match.path}teamBuy`} component={TeamBuy}></Route>
          <Route path={`${this.props.match.path}center`} component={Me}></Route>
          <Redirect to={`${this.props.match.path}films`}></Redirect>
        </Switch>
        <Navbar curTab={this.state.curTab} changeTab={this.changeTab}></Navbar>
      </div>
    )
  }


}

export default Home;
