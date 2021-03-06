import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './components/common/css/move-base.css';
import './components/common/css/main.css';

import City from "./components/views/citys";
import Home from "./components/views/home";
import store from './store';
import { SETCITY } from './store/actionType';

class App extends Component {
  constructor() {
    super();
    this.state = {
      curCity: store.getState().curCity,
    }
  }
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

  componentWillMount() {
    // 调用百度地图接口根据IP获取当前城市
    /* eslint-disable */
    let myCity = new BMap.LocalCity();
    myCity.get( result => {
      const leg = result.name.length;
      // 需要的修改 store 的数据 ，调用 store.dispatch('action', payload) 派发一个动作
      store.dispatch({
        type: SETCITY,
        data: result.name.slice(0, leg - 1)
      })
    });
  }
}

export default App
