import React, { Component } from 'react';
import './index.scss';

class Banner extends Component {
  render() {
    return (
      <div className="banner-list">
          <img src={require('./images/pic-1.jpg')} alt="" />
      </div>
    )
  }
}

export default Banner;
