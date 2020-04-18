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
