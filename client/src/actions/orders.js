import * as api from '~/clients/api';
import { createHashHistory } from 'history';

import {
  FETCH_ORDERS_SUCCESS,
  ADD_ORDER_SUCCESS
} from '~/actions/types';

const browserHistory = createHashHistory();

function fetchOrdersSuccess(orders) {
  return {
    type: FETCH_ORDERS_SUCCESS,
    payload: orders
  }
}

function addOrderSuccess(order) {
  return {
    type: ADD_ORDER_SUCCESS,
    payload: order
  }
}

export function fetchOrdersList() {
  return async dispatch => {
    let response;

    try {
      response = await api.ordersList();
    } catch {
      return;
    }

    dispatch(fetchOrdersSuccess(response));
  };
}

export function addOrder(note, menuItemIds) {
  return async dispatch => {
    let response;

    try {
      response = await api.createOrder(note, menuItemIds);
    } catch {
      return;
    }

    browserHistory.push('/orders');
    dispatch(addOrderSuccess(response));
  };
}
