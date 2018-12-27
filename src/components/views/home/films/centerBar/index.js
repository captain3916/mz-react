import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './index.scss';

class CenterBar extends Component {
  constructor() {
    super();
    this.state = {
      divStyle: 'translate3d(0%, 0px, 0px)'
    };
  }
  render() {
    return (
      <div className="tables-bar-wrapper">
        <ul>
          <NavLink to='/films/nowPlaying'
            onClick={this.changeStyle.bind(this,'nowPlaying')}>
            <span>正在热映</span>
          </NavLink>
          <NavLink to='/films/comingSoon'
            onClick={this.changeStyle.bind(this,'comingSoon')}>
            <span>即将上映</span>
          </NavLink>
          <div style={{transform: this.state.divStyle}}>
            <span></span>
          </div>
        </ul>
      </div>
    )
  }

  changeStyle(cur) {
    if (cur === 'nowPlaying') {
      this.setState({ divStyle: 'translate3d(0%, 0px, 0px)'});
    } else {
      this.setState({ divStyle: 'translate3d(100%, 0px, 0px)'});
    }
  }
}

export default CenterBar;
