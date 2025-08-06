// the axios instance and types
import http from "../api";
import { type APIResponse } from "../types";
import { type Category, type InputCreateCategory, type InputUpdateCategory } from "./types";

async function getCategory() {
  return await http.get<APIResponse<Category[]>>(`category`);
}

async function deleteCategory(id: number) {
  return await http.delete<APIResponse<boolean>>(`category/${id}`);
}

async function createCategory(input: InputCreateCategory) {
  return await http.post<APIResponse<Category>>("category", input);
}

async function updateCategory(input: InputUpdateCategory) {
  return await http.put<APIResponse<boolean>>("category", input);
}

export default {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};