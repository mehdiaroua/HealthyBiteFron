import { LikeType } from "./LikeType";

export interface Like {
  id: number;
  userId: number;
  postId: number;
  commentId?: number;
  likeType: LikeType;
}