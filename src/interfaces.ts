import { DateTime } from "luxon";

export interface User {
  name: string;
  img: string;
}

export interface crud {
  title: string;
  body: string;
  creator: User;
  post_date: DateTime;
  num_comments: number;
  num_shares: number;
  num_likes: number;
}
