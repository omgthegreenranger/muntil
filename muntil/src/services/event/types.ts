export type Event = {
  eventId: number;
  name: string;
  due: number;
  description: string;
  urgency: number;
  event_range_low: number;
  event_range_low_title: number;
  event_range_med: number;
  event_range_med_title: number;
  event_range_high: number;
  event_range_high_title: number;
  catId: number;
  userId: number;
};

export type InputCreateEvent = {
    name: string;
    due: number;
    description: string;
    urgency: number;
    event_range_low: number;
    event_range_low_title: number;
    event_range_med: number;
    event_range_med_title: number;
    event_range_high: number;
    event_range_high_title: number;
    catId: number;
    userId: number;
};

export type InputUpdateEvent = {
    eventId: number;
    name: string;
    due: number;
    description: string;
    urgency: number;
    event_range_low: number;
    event_range_low_title: number;
    event_range_med: number;
    event_range_med_title: number;
    event_range_high: number;
    event_range_high_title: number;
    catId: number;
    userId: number;
};