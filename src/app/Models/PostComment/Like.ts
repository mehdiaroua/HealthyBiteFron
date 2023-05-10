import { User } from "src/app/Class/user";
import {  Post } from "./Post";

export interface Like {
  id: number;
  user: User;
  post: Post;
  likeType: LikeType;
}

export enum LikeType {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE'
}