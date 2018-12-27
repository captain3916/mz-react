import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.scss';

class Tabbar extends Component {
  render() {
    let navList = this.props.navList;
    return (
      <ul className="nav-bar">
        {
          navList.map((item) => {
            return (
              <li key={item.id}>
                <NavLink className={item.id}
                  to={item.href}>
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

/**
 * @param navList:[{ id: 'films', href: '/films', name: '电影' },{}...]
 */
Tabbar.propTypes = {
  navList: PropTypes.array.isRequired
}


export default Tabbar;
