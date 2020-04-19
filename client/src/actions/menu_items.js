import * as api from '~/clients/api';

import {
  FETCH_MENU_ITEM_SUCCESS
} from '~/actions/types';

function fetchMenuItemSuccess(orders) {
  return {
    type: FETCH_MENU_ITEM_SUCCESS,
    payload: orders
  }
}

export function fetchMenuItemsList() {
  return async dispatch => {
    dispatch(fetchMenuItemPending());

    let response;

    try {
      response = await api.getMenuItemsList();
    } catch {
      return;
    }

    dispatch(fetchMenuItemSuccess(response));
  };
}
