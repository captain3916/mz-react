
import { SETCITYID } from '../actionType';


export default function curCityId (state=0, action) {
    // 操作之后要返回一个新的state
    switch (action.type) {
      case SETCITYID:
        return action.data;
      default:
        return state;
    }
}