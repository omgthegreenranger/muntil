// the axios instance and types
import http from "../api";
import { type APIResponse } from "../types";
import { type User, type InputCreateUser, type InputUpdateUser } from "./types";

async function getUsers() {
  return await http.get<APIResponse<User[]>>("user");
}

async function deleteUser(id: number) {
  return await http.delete<APIResponse<boolean>>(`user/${id}`);
}

async function createUser(input: InputCreateUser) {
  return await http.post<APIResponse<User>>("user", input);
}

async function updateUser(input: InputUpdateUser) {
  return await http.put<APIResponse<boolean>>("user", input);
}

export default {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};