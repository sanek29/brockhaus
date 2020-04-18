import { REGISTER_USER, LOGGED_IN, LOGOUT_USER} from '~/actions/types';
import { Map } from 'immutable';

const initialState = Map();

export default function(state = initialState, action){
  switch(action.type){
    case REGISTER_USER:
      return {...state, register: action.payload }
    case LOGGED_IN:
      return action.payload;
    case LOGOUT_USER:
      return initialState;
    default:
      return state;
  }
}
