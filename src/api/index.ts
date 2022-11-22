import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiConfigParams } from '@/types/api_types';

export const createAxiosDefaultConfig = ({ baseURL }: ApiConfigParams): AxiosRequestConfig => {
  const config: AxiosRequestConfig = {
    headers: {},
  };

  if (baseURL) {
    config.baseURL = baseURL;
    config.withCredentials = true;
  } else {
    config.baseURL = '';
  }
  return config;
};

// https://kabsdkja.ua/api/
export const createAxiosDefaultInstance = (baseUrl: { host?: string, path?: string } = {}): AxiosInstance => {
  const config = createAxiosDefaultConfig({ baseURL: baseUrl?.host });

  if (baseUrl.path) {
    config.baseURL += baseUrl.path;
  }

  const instance: AxiosInstance = axios.create(config);
  // TODO: axios interceptors
  return instance;
};
