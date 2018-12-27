import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

class index extends Component {
  constructor() {
    super();
    this.state = {
      navList: [
        {
          id: 'films',
          name: '电影',
        },
        {
          id: 'cinemas',
          name: '影院',
        },
        {
          id: 'teamBuy',
          name: '9.9拼团',
        },
        {
          id: 'center',
          name: '我的'
        }
      ],
    }
  }
  render() {
    return (
      <ul className="nav-bar">
        {
          this.state.navList.map((item) => {
            return (
              <li key={item.id}>
                <NavLink className={item.id}
                  to={`/${item.id}`}>
                  <i className="img"></i>
                  <span>{item.name}</span>
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    )
  }

}

export default index
