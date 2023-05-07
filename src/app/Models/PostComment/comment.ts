import { User } from "src/app/Class/user";
import { Post } from "./Post";
import { Tag } from "./Tag";
import { Reply } from "./reply";

export class Comment {
//   id!: number;
//   content!: string;
// user!: {
//     name: string;
//     imageUrl: string;
//   };  likes!: number;
//   dislikes!: number;
//   post!: Post;
//   likess!: any[];
//   tags!: Tag[];
//   replies!: Comment[];
//   postId!: number;
    
  id!: number;
  postId!: number;
  content!: string;
  replies!: Reply[];
  commentId?: number;
  showReply!: boolean; // Add the showReply property here
  user!: User;


}
