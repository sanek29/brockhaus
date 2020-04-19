import {
  FETCH_ORDERS_SUCCESS,
  ADD_ORDER_SUCCESS
} from '~/actions/types';

import { Map, List, fromJS } from 'immutable';

const initialState = Map({
  list: List()
});

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_ORDERS_SUCCESS:
      return state.set('list', action.payload);
    case ADD_ORDER_SUCCESS:
      return state.update('list', list => list.unshift(fromJS(action.payload)));
    default:
      return state;
  }
}
