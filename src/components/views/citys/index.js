import React, { Component } from 'react';
import axios from 'axios';
import URL from '../../common/Api';

import './index.scss';

class Citys extends Component {
  constructor() {
    super();
    this.state = {
      cityList: [], // 所有城市列表
      keyValue: '', // 搜索城市的关键字
      firstLetter: [], // 城市首字母拼音
      hotCitys: [], // 获取热门城市
      citySort:[] // 城市按字母排序
    }

    this.getHotCitys = this.getHotCitys.bind(this);
    this.getFirstLetter = this.getFirstLetter.bind(this);
    this.getCitySort = this.getCitySort.bind(this);
  }
  // 获取热门城市
  getHotCitys() {
    const hotCitys = this.state.cityList.filter(item => item.isHot === 1);
    this.setState({ hotCitys });
  }

  // 城市首字母拼音
  getFirstLetter() {
    const arr = [];
    this.state.cityList.forEach((item) => {
      const st = item.pinyin.charAt(0).toUpperCase();
      if (arr.indexOf(st) === -1) arr.push(st);
    });
    arr.sort()
    this.setState({ firstLetter: arr });
  }

  // 城市按字母排序
  getCitySort() {
    /* eslint-disable arrow-body-style */
    const letOrd = this.state.firstLetter;
    const arr = letOrd.map((item) => { return { letter: item, list: [] }; });
    this.state.cityList.forEach((item) => {
      const st = item.pinyin.charAt(0).toUpperCase();
      const i = letOrd.indexOf(st);
      arr[i].list.push(item);
    });
    this.setState({ citySort: arr });
  }

  componentWillMount() {
    axios.get(URL.citysUrl).then((response) => {
      if (response.data.code === 0) {
        this.setState({ cityList: response.data.data.citys });
        this.getHotCitys();
        this.getFirstLetter();
        this.getCitySort();
      } else {
        /* eslint-disable no-alert */
        alert(response.data.msg);
      }
    });
  }

  render() {
    return (
      <div className="mint-indexlist city-index">

        <ul className="mint-indexlist-content">
          <div className="recommend-city">
            <div className="gprs-city">
              <div className="city-index-title">GPS定位你所在的城市</div>
              <ul className="city-index-detail clearfix">
                <li>
                  <div>定位失败</div>
                </li>
              </ul>
            </div>
            <div className="hot-city">
              <div className="city-index-title">热门城市</div>
              <ul className="city-index-detail">
                {
                  this.state.hotCitys.map((item,index) => {
                    return (
                      <li key={index}>
                        <div click="changeCity(item)">{item.name}</div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          {
            this.state.citySort.map((item,index) => {
              return (
                <li className="mint-indexsection city-index-section"
                  key={index}>
                  <p className="mint-indexsection-index">{item.letter}</p>
                  <ul>
                    {
                      item.list.map((it,i) => {
                        return (
                          <li key={i}>{it.name}</li>
                        )
                      })
                    }
                  </ul>
                </li>
              )
            })
          }
        </ul>
        <div class="mint-indexlist-nav">
          <ul>
            {
              this.state.firstLetter.map((item,index) => {
                return (
                  <li key={index}>{item}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default Citys
