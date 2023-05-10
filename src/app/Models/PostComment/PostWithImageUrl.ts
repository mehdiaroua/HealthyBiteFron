import { Post } from "./Post";

export interface PostWithImageUrl extends Post {
  imageUrl: string;
}