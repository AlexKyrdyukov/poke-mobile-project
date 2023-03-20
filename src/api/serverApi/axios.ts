import axios, { AxiosError } from 'axios';
import getDeviceId from 'src/utils/deviceIdHelper';
import tokenHelper from 'src/utils/tokenHelper';
import authApi from './authApi';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

axiosInstance.interceptors.request.use(async (request) => {
  const [accessToken] = await tokenHelper.getTokens();
  const deviceId = await getDeviceId();
  if (accessToken) {
    const customRequest = request;
    customRequest.headers.authorization = `Bearer ${accessToken}`;
    customRequest.headers.device_id = deviceId;
  }
  return request;
});

axiosInstance.interceptors.response.use(async (response) => {
  return response;
}, async (error) => {
  try {
    const originalRequest = error.config;

    if (error instanceof AxiosError &&
      error.response?.status === 401 &&
      originalRequest.url !== '/auth/refresh'
    ) {
      const [, oldRefreshToken] = await tokenHelper.getTokens();
      const { accessToken, refreshToken } = await authApi.refresh(`Bearer ${oldRefreshToken}`);
      await tokenHelper.setTokens(`${accessToken}, ${refreshToken}`);

      if (originalRequest) {
        const req = await axiosInstance.request(originalRequest);
        return req;
      }
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
  throw error;
});

export default axiosInstance;
