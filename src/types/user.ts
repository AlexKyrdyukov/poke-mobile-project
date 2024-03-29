export type UserStorage = {
  userId: number;
  email: string;
  password: string;
  fullName?: string | null;
  avatar?: string | null;
};

export type User = Omit<UserStorage, 'password'>;
