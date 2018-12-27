// 用来创建仓库的js. 最后需要将 仓库给暴露出去
import { createStore } from 'redux';
import reducers from './reducers';

// 2. 调用 createStore 方法返回 一个 仓库的实例对象, 第一个参数需要传递 reudcer
const store = createStore(reducers);

export default store;

