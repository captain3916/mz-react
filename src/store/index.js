// 用来创建仓库的js. 最后需要将 仓库给暴露出去
import { createStore, combineReducers } from 'redux';
// import reducers from './reducers/index';
import curCity from './reducers/curCityReducer';
import curCityId from './reducers/curCityIdReducer';

// 2. 调用 createStore 方法返回 一个 仓库的实例对象, 第一个参数需要传递 reudcer
const store = createStore(combineReducers({
    curCity,
    curCityId
}));

export default store;

