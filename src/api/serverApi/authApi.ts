import type { User } from 'src/types/user';
import axiosInstance from './axios';

type AuthType = {
  email: string;
  password: string;
};

const signUp = async (user: AuthType) => {
  const response = await axiosInstance.post<{ accessToken: string; refreshToken: string; user: User; message: string }>('/auth/sign-up', user);
  return response.data;
};

const signIn = async (user: AuthType) => {
  const response = await axiosInstance.post<{ accessToken: string; refreshToken: string; user: User }>('/auth/sign-in', user);
  return response.data;
};

const getMe = async () => {
  const response = await axiosInstance.get<User>('/auth/me');
  return response.data || null;
};

export default {
  getMe,
  signIn,
  signUp,
};
