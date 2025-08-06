// the axios instance and types
import http from "../api";
import { type APIResponse } from "../types";
import { type Event, type InputCreateEvent, type InputUpdateEvent } from "./types";

async function getEvents() {
  return await http.get<APIResponse<Event[]>>("event");
}

async function deleteEvent(id: number) {
  return await http.delete<APIResponse<boolean>>(`event/${id}`);
}

async function createEvent(input: InputCreateEvent) {
  return await http.post<APIResponse<Event>>("event", input);
}

async function updateEvent(input: InputUpdateEvent) {
  return await http.put<APIResponse<boolean>>("event", input);
}

export default {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
};