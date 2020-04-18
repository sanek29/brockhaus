import {
  getValue,
  setValue,
  deleteValue,
} from './core';

const TOKEN_STORAGE_KEY = 'jwt';

export function setAuthToken(token) {
  return setValue(TOKEN_STORAGE_KEY, token);
}

export function getAuthToken() {
  return getValue(TOKEN_STORAGE_KEY);
}

export function removeAuthToken() {
  return deleteValue(TOKEN_STORAGE_KEY);
}
