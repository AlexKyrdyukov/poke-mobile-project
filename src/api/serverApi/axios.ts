import axios, { AxiosError } from 'axios';
import getDeviceId from 'src/utils/deviceIdHelper';
import tokenHelper from 'src/utils/tokenHelper';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.88.15:4000/api',
});

axiosInstance.interceptors.request.use(async (request) => {
  const [accessToken] = await tokenHelper.getTokens();
  const deviceId = await getDeviceId();
  const customRequest = request;
  customRequest.headers.device_id = deviceId;
  if (accessToken) {
    customRequest.headers.authorization = `Bearer ${accessToken}`;
  }
  return request;
});

const refresh = async (refreshToken: string | undefined) => {
  const response = await axiosInstance.post<{ accessToken: string; refreshToken: string }>('/auth/refresh', { refreshToken });
  return response.data;
};

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
      console.log(oldRefreshToken);
      const { accessToken, refreshToken } = await refresh(`Bearer ${oldRefreshToken}`);
      console.log(refreshToken);
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
