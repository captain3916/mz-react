import { SETCITY } from '../actionType';

/**
 *
 * @param {Object} prevState 这次动作之前的数据（state）
 * @param {Object} action 这次的动作描述对象
 */
export default function curCity (state='', action) {
    // 操作之后要返回一个新的state
    switch (action.type) {
      case SETCITY:
      return action.data;
      default:
        return state;
    }
}
