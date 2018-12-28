import React, { Component } from 'react';
import { SearchBar, WhiteSpace } from 'antd-mobile';

export class Me extends Component {
  render() {
    return (
      <div>
        <SearchBar placeholder="请输入拼音或城市名称" />
        <WhiteSpace />
        我是个人页
      </div>
    )
  }
}

export default Me
