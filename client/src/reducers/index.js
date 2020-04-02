import { CombineReducers } from 'redux';
import user from './user_reducer'

const rootReducer = CombineReducers({
  user
});

export default rootReducer;