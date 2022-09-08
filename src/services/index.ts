

import Axios, { AxiosRequestConfig } from 'axios';

import {storage, apiConfig} from '../utils';

function authRequestInterceptor(config: AxiosRequestConfig) {
  const token = storage.getAccessToken();
  const newConfig = config;
  if (newConfig && newConfig?.headers) {
    if (token) {
      newConfig.headers.authorization = `${token}`;
    }
    newConfig.headers.Accept = 'application/json';
  }

  return newConfig;
}

export const apiService = Axios.create({
  baseURL: apiConfig.BASE_URL,
});

apiService.interceptors.request.use(authRequestInterceptor);
apiService.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    const message = error.response?.data?.message || error.message;
    // useNotificationStore.getState().addNotification({
    //   type: 'error',
    //   title: 'Error',
    //   message,
    // });

    return Promise.reject(error);
  },
);