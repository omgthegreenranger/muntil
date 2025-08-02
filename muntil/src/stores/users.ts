import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {
    type InputCreateUser,
    type InputUpdateUser,
    type User,
} from "../services/user/types";
import { type APIResponse } from "../services/types";
import { API } from "../services";
import { AxiosError } from "axios";


export const useUserList = defineStore('users', () => {
    const users = ref<User[]>([]);

    function initUser(data: User[]) {
        users.value = data;
    }

    function addNewUser(category: User) {
        users.value.push(category);
    }

    function removeUser(id: number) {
        const idx = users.value.findIndex((s) => s.id === id);
        if (idx === -1) return;
        users.value.splice(idx, 1);
    }

    async function dispatchGetUsers(): Promise<APIResponse<null>> {
        try {
            const { status, data } = await API.users.getUsers();
            if (status === 200) {
                initUser(data.content);
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

    async function dispatchCreateUser(
        input: InputCreateUser
    ): Promise<APIResponse<null>> {
        try {
            const { status, data } = await API.users.createUser(input);
            if (status === 200) {
                addNewUser(data.content);
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

    async function dispatchDeleteUser(id: number): Promise<APIResponse<null>> {
        try {
            const { status } = await API.users.deleteUser(id);
            if (status === 200) {
                removeUser(id);
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

    async function dispatchUpdateUser(
        input: InputUpdateUser
    ): Promise<APIResponse<null>> {
        try {
            const { status } = await API.users.updateUser(input);
            if (status === 200) {
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

    return {
        users,
        initUser,
        removeUser,
        dispatchGetUsers,
        dispatchCreateUser,
        dispatchDeleteUser,
        dispatchUpdateUser,
    };
});