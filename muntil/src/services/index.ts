import userController from "./user";
import eventController from "./event";
import catController from "./category";

export const API = {
  users: userController,
  events: eventController,
  category: catController
};