import { post, get } from './core';

export function login(email, password) {
  return post('/token', { email, password });
}

export function currentUser() {
  return get('/me');
}

export function registration(data) {
  return post('/register', data);
}

export function ordersList() {
  return get('/orders');
}

export function createOrder(note, menuItemIds) {
  return post('/orders', { note, menuItemIds });
}

export function getMenuItemsList() {
  return get('/menu_items');
}