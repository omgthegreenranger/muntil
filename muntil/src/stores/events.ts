import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {
    type InputCreateEvent,
    type InputUpdateEvent,
    type Event,
} from "../services/event/types";
import { type APIResponse } from "../services/types";
import { API } from "../services";
import { AxiosError } from "axios";


export const useEventsList = defineStore('event', () => {
    const events = ref<Event[]>([]);

    function initEvents(data: Event[]) {
        events.value = data;
    }

    function addNewEvent(event: Event) {
        events.value.push(event);
    }

    function removeEvent(id: number) {
        const idx = events.value.findIndex((s) => s.eventId === id);
        if (idx === -1) return;
        events.value.splice(idx, 1);
    }

    async function dispatchGetEvents(): Promise<APIResponse<Event[]>> {
        try {
            const { status, data } = await API.events.getEvents();
            if (status === 200) {
                initEvents(data.content);

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

    async function dispatchCreateEvent(
        input: InputCreateEvent
    ): Promise<APIResponse<null>> {
        try {
            const { status, data } = await API.events.createEvent(input);
            if (status === 200) {
                addNewEvent(data.content);
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

    async function dispatchDeleteEvent(id: number): Promise<APIResponse<null>> {
        try {
            const { status } = await API.events.deleteEvent(id);
            if (status === 200) {
                removeEvent(id);
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

    async function dispatchUpdateEvent(
        input: InputUpdateEvent
    ): Promise<APIResponse<null>> {
        try {
            const { status } = await API.events.updateEvent(input);
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
        events,
        initEvents,
        removeEvent,
        dispatchGetEvents,
        dispatchCreateEvent,
        dispatchDeleteEvent,
        dispatchUpdateEvent,
    };
});