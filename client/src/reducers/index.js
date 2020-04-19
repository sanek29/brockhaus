import { combineReducers } from 'redux';
import user from './user';
import orders from './orders';
import menuItems from './menu_items';

const rootReducer = combineReducers({
  user,
  orders,
  menuItems
});

export default rootReducer;