import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import URL from '../../../../common/Api';
import './index.scss';

class NowPlaying extends Component {
  constructor() {
    super();
    this.state = {
      loadMsg: '点击加载下一页',
      filmList: [],
      totalPage: 0, // 总页数
      pageNum: 1, // 当前页码
      pageSize: 5, // 每页条数
    }
    this.getAutor = this.getAutor.bind(this);
    this.getFilms = this.getFilms.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }
  render() {
    return (
      <div className="nowPlayingList-wrap">
        <ul>
          {
            this.state.filmList.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={`/film/${item.filmId}`}>
                    <div className="film-img">
                      <img src={ item.poster } alt='pic'/>
                    </div>
                    <div className="film-info">
                      <div className="film-info-name info-col">
                        <span className="name">{item.name}</span>
                        <span className="item">{item.item.name}</span>
                      </div>
                      <div className="film-info-grade info-col">
                        <span className="label">观众评分</span>
                        <span className="item">{item.grade}</span>
                      </div>
                      <div className="film-info-actors info-col">
                        <span className="label">主演：{this.getAutor(item.actors)}</span>
                      </div>
                      <div className="film-info-detail info-col">
                        <span className="label">{item.nation} | {item.runtime}分钟</span>
                      </div>
                    </div>
                    <div className="file-buy">购票</div>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        <div className="loadMore" onClick={this.loadMore}>{this.state.loadMsg}</div>
      </div>
    )
  }

  componentWillMount() {
    this.getFilms();
  }

  /**
   * 获取主演名字
   */
  getAutor(list) {
    if (list) {
      // console.log(list);
      return list.map(item => item.name).join(' ');
    }
    return '';
  }

  // 加载更多
  loadMore() {
    if (this.state.pageNum >= this.state.totalPage) {
      this.setState({ loadMsg: '别拉了，我是有底线的！' });
    } else {
      this.setState({ pageNum: this.state.pageNum + 1 });
      this.getFilms();
    }
  }

  /**
  * 获取电影列表
  */
  getFilms() {
    axios.get(URL.filmsUrl, {
      params: {
        pageSize: this.state.pageSize,
        pageNum: this.state.pageNum,
        type: 1,
      },
    })
    .then((response) => {
      if (response.data.code === 0) {
        const films = response.data.data.films;
        for (let i = 0; i < films.length; i += 1) {
          films[i].price = Math.round((Math.random() * 30) + 35);
        }
        this.state.filmList.push(...films);
        this.setState({
          totalPage: Math.ceil(response.data.data.total / this.state.pageSize),
          filmList: this.state.filmList
        })
      } else {
        /* eslint-disable no-alert */
        alert(response.data.msg);
      }
    });
  }
}

export default NowPlaying
