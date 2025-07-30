export type Category = {
  catId: number;
  name: string;
  desc: string;
  icon: string;
  range_low: number;
  range_low_title: number;
  range_med: number;
  range_med_title: number;
  range_high: number;
  range_high_title: number;

};

export type InputCreateCategory = {
  name: string;
  desc: string;
  icon: string;
  range_low: number;
  range_low_title: number;
  range_med: number;
  range_med_title: number;
  range_high: number;
  range_high_title: number;
};

export type InputUpdateCategory = {
  catId: number;
  name: string;
  desc: string;
  icon: string;
  range_low: number;
  range_low_title: number;
  range_med: number;
  range_med_title: number;
  range_high: number;
  range_high_title: number;
};