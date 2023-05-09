import { User } from "src/app/Class/user";
import { Tag } from "./Tag";
import { Comment } from "./comment";
import { Like } from "./Like";

export class Post {
    id!: number;
    title!: string;
    content!: string;
    addedDate!: Date;
    imageData!: string; // Change from File to string
    // tags!: Tag[];
    image!: File;
      comments!: Comment[]; // Define a comments property that is an array of Comment objects
  user!: User;
   likedByUser!: boolean;
  numberOfLikes!: number;
  likeType!: LikeType;
  likes!: Like[];
  dislikes!: Like[];
  likeCount!: number;
  dislikeCount!:number;

  


}

export enum LikeType {
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE'
}
