import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '../../common/NavBar';
import Films from './films';
import Cinemas from './cinemas';
import TeamBuy from './teamBuy';
import Me from './me';

import './index.scss';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      navList: [
        { id: 'films', href: '/films', name: '电影'},
        { id: 'cinemas', href: '/cinemas', name: '影院'},
        { id: 'teamBuy', href: '/teamBuy', name: '9.9拼团'},
        { id: 'center', href: '/center', name: '我的'}
      ]
    };
  }
  render() {
    return (
      <div className='gnd-home'>
        <div className='gnd-home__main'>
          <Switch>
            <Route path={`${this.props.match.path}films`} component={Films}></Route>
            <Route path={`${this.props.match.path}cinemas`} component={Cinemas}></Route>
            <Route path={`${this.props.match.path}teamBuy`} component={TeamBuy}></Route>
            <Route path={`${this.props.match.path}center`} component={Me}></Route>
            <Redirect to={`${this.props.match.path}films`}></Redirect>
          </Switch>
        </div>
        <Navbar navList={this.state.navList}></Navbar>
      </div>
    )
  }

}

export default Home;
