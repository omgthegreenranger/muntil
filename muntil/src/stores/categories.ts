import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {
    type InputCreateCategory,
    type InputUpdateCategory,
    type Category,
} from "../services/category/types";
import { type APIResponse } from "../services/types";
import { API } from "../services";
import { AxiosError } from "axios";


export const useCategoriesList = defineStore('categories', () => {
    const categories = ref<Category[]>([]);
 
    function initCategories(data: Category[]) {
        categories.value = data;
    }

    function addNewCategory(category: Category) {
        categories.value.push(category);
    }

    function removeCategory(id: number) {
        const idx = categories.value.findIndex((s) => s.catId === id);
        if (idx === -1) return;
        categories.value.splice(idx, 1);
    }

    async function dispatchGetCategories(): Promise<APIResponse<Category[]>> {
        try {
            const { status, data } = await API.category.getCategory();
            if (status === 200) {
                initCategories(data.content);
                return {
                    success: true,
                    content: data,
                };
            }
        } catch (error) {
            const _error = error as AxiosError<string>;
            return {
                success: false,
                status: _error.response?.status,
                content: null,
            };
        }
        return {
            success: false,
            content: null,
            status: 400,
        };
    }

    async function dispatchCreateCategory(
        input: InputCreateCategory
    ): Promise<APIResponse<null>> {
        try {
            const { status, data } = await API.category.createCategory(input);
            if (status === 200) {
                addNewCategory(data.content);
                return {
                    success: true,
                    content: data,
                };
            }
        } catch (error) {
            const _error = error as AxiosError<string>;
            return {
                success: false,
                status: _error.response?.status,
                content: null,
            };
        }
        return {
            success: false,
            content: null,
            status: 400,
        };
    }

    async function dispatchDeleteCategory(id: number): Promise<APIResponse<null>> {
        try {
            const { status } = await API.category.deleteCategory(id);
            if (status === 200) {
                removeCategory(id);
                return {
                    success: true,
                    content: null,
                };
            }
        } catch (error) {
            const _error = error as AxiosError<string>;
            return {
                success: false,
                status: _error.response?.status,
                content: null,
            };
        }
        return {
            success: false,
            content: null,
            status: 400,
        };
    }

    async function dispatchUpdateCategory(
        input: InputUpdateCategory
    ): Promise<APIResponse<null>> {
        try {
            const { status } = await API.category.updateCategory(input);
            if (status === 200) {
                return {
                    success: true,
                    content: data,
                };
            }
        } catch (error) {
            const _error = error as AxiosError<string>;
            return {
                success: false,
                status: _error.response?.status,
                content: null,
            };
        }
        return {
            success: false,
            content: null,
            status: 400,
        };
    }

    return {
        categories,
        initCategories,
        removeCategory,
        dispatchGetCategories,
        dispatchCreateCategory,
        dispatchDeleteCategory,
        dispatchUpdateCategory,
    };
});