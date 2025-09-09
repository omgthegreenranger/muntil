export type Category = {
  catId: number;
  name: string;
  desc: string;
  icon: string;
  range_low: number;
  range_low_title: string;
  range_med: number;
  range_med_title: string;
  range_high: number;
  range_high_title: string;
};

export type InputCreateCategory = {
  name: string;
  desc: string;
  icon: string;
  range_low: number;
  range_low_title: string;
  range_med: number;
  range_med_title: string;
  range_high: number;
  range_high_title: string;
};

export type InputUpdateCategory = {
  catId: number;
  name: string;
  desc: string;
  icon: string;
  range_low: number;
  range_low_title: string;
  range_med: number;
  range_med_title: string;
  range_high: number;
  range_high_title: string;
};