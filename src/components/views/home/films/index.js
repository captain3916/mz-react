import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Banner from './filmsBanner';
import CenterBar from './centerBar';
import NowPlaying from './nowPlaying';
import ComingSoon from './comingSoon';
import CurCity from './curCity';

export class films extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>
        <CurCity></CurCity>
        <CenterBar></CenterBar>
        <Switch>
          <Route path={ `${this.props.match.path}/nowPlaying` } component={ NowPlaying }></Route>
          <Route path={ `${this.props.match.path}/comingSoon` } component={ ComingSoon }></Route>
          <Redirect to={ `${this.props.match.path}/nowPlaying` }></Redirect>
        </Switch>
      </div>
    )
  }
}

export default films
