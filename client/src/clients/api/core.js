import * as queryString from 'query-string';
import { fromJS } from 'immutable';
import { notification } from 'antd';

import * as clientStorage from '../storage';


const HTTP_ERROR_MESSAGES = {
  400: 'Request Failed',
  401: 'Unauthorized',
  403: 'No Permission',
  404: 'Not Found',
};

class APIException {
  constructor(response, json) {
    this.status = response.status;
    this.statusText = response.statusText;
    this.message = json.message || 'No Message';
  }
}

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

function attachAuthorizationHeader(requestConfig) {
  const token = clientStorage.getAuthToken();

  return token
    ? Object.assign({}, requestConfig, {
      headers: Object.assign({}, requestConfig.headers || {}, {
        Authorization: `Bearer ${token}`,
      }),
    })
    : requestConfig;
}

function errorHandlerDecorator(requestCoreFunc) {
  return async function errorHandler(path, config) {
    const response = await requestCoreFunc(path, config);

    const { status } = response;

    if (response.ok) {
      return status === 204
        ? null
        : response;
    }

    let json;
    try {
      json = await response.json();
    } catch (e) {
      json = {};
    }

    const httpErrorMessage = json.message || HTTP_ERROR_MESSAGES[status];
    notification.error({ message: httpErrorMessage });

    throw new APIException(response, json);
  };
}

async function requestCore(path, config = {}) {
  return fetch(`${path}`, attachAuthorizationHeader(config));
}

const request = errorHandlerDecorator(requestCore);

export async function post(path, content) {
  const response = await request(path, {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify(content),
  });

  return response && fromJS(await response.json());
}

export async function get(path, queryParams = {}) {
  const qry = queryString.stringify(queryParams, { arrayFormat: 'bracket' });
  const response = await request(`${path}${qry ? '?' : ''}${qry}`, {
    method: 'GET',
  });

  return response && fromJS(await response.json());
}
