import type { AxiosError, AxiosResponse } from 'axios';
import type { User } from 'src/types/user';
import axiosInstance from 'src/api/serverApi/axios';

type UserData = Omit<User, 'userId'|'avatar'>;

type UserPasswordsData = {
  password: string;
  newPassword: string;
};

const changeData = async (userId: number | undefined, data: UserData) => {
  const response = await axiosInstance.patch<User>(`/user/${userId}`, data);
  return response.data;
};

const deleteUser = async (userId: number | undefined) => {
  const response = await axiosInstance.delete<AxiosResponse | AxiosError>(`/user/${userId}`);
  return response.data;
};

const changePassword = async (
  userId: number | undefined, data: UserPasswordsData,
) => {
  const response = await axiosInstance.patch<{ message: string }>(`/user/${userId}/password`, data);
  return response.data;
};

const setAvatar = async (userId: number | undefined, file: string | ArrayBuffer | null) => {
  const response = await axiosInstance.post<User>(`/user/${userId}/avatar`, { avatar: file });
  return response.data;
};

export default {
  changeData,
  deleteUser,
  changePassword,
  setAvatar,
};
