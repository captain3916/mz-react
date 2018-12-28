import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store from '@/store'

import './index.scss';

class CurCity extends Component {
  constructor() {
    console.log(store.getState());
    super();
    this.state = {
      curCity: store.getState().curCity
    };

    // 监听 仓库的变化
    this.unsubscribe = store.subscribe(() => {
      if(this.state.curCity !== store.getState().curCity){
        console.log('如果仓库中的当前城市发生了变化');
        this.setState({
          curCity: store.getState().curCity
        })
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    return (
      <Link to='/citys' className="city-fixed">
        <span>{this.state.curCity}</span>
        <i className="iconfont icon-xialajiantouxiao"></i>
      </Link>
    )
  }
}

export default CurCity;
