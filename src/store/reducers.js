
import { SETCITY } from './actionType';

// 先定义初始数据
let defaultState = {
    // 当前城市
    curCity: '',
    // 当前城市Id
    curCityId: 0,
    // 用户名
    userName: localStorage.getItem('userName'),
    // 用户购物车信息 [{filmName,filmId,filmNum,price},...]
    userShopCard: localStorage.getItem('shopCard') ? JSON.parse(localStorage.getItem('shopCard')) : [],
}

// 2. 暴露纯函数
/**
 *
 * @param {Object} prevState 这次动作之前的数据（state）
 * @param {Object} action 这次的动作描述对象
 */
export default function(prevState=defaultState, action) {
  // 操作之后要返回一个新的state
  console.log('==============',prevState,'========', action);
  let state = JSON.parse(JSON.stringify(prevState));

  if (action.type === SETCITY) {
    state.curCity = action.data;
  }

  console.log('==============',state,'========', action);
  return state;
}
