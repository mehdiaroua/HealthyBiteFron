import { Post } from "./Post";
import { Tag } from "./Tag";
import { User } from "./User";

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
//   parentComment!: Comment;
//   replies!: Comment[];
//   postId!: number;
    
  id!: number;
  postId!: number;
  content!: string;
  replies!: Comment[];

}
