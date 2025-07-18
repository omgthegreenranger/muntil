export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

export type InputCreateUser = {
  name: string;
  username: string;
  password: string;
};

export type InputUpdateUser = {
  id: number;
  name: string;
  username: string;
  password: string;
};