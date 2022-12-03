import { useStore } from 'vuex';
import axios, {AxiosRequestConfig} from 'axios';
import { refreshToken } from '../helpers/refreshToken';

const clientApi = axios.create({
  baseURL: `http://localhost:3001/api/v1/client/`
});

clientApi.interceptors.request.use( (config: AxiosRequestConfig): AxiosRequestConfig => {
  config.headers!.Authorization = `Bearer ${ localStorage.getItem('access_token') }`;
  return config;
});

clientApi.interceptors.response.use(
  ( response: any ) => {
    return response;
}, async( error: any ) => {
  const token = localStorage.getItem('refresh_token');
  if ( error.response.status === 403 && token ) {
    const originalRequest = error.config;
    const newToken = await refreshToken( token );
    originalRequest.headers.Authorization = `Bearer ${ newToken }`;
    return axios( originalRequest );
  }
  return Promise.reject(error);
});

export default clientApi;