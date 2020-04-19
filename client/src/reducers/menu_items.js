import {
  FETCH_MENU_ITEM_SUCCESS
} from '~/actions/types';

import { Map, List } from 'immutable';

const initialState = Map({
  pending: false,
  list: List()
});

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_MENU_ITEM_SUCCESS:
      return state.set('list', action.payload);
    default:
      return state;
  }
}
