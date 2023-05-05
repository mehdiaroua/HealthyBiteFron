import { Tag } from "./Tag";
import { Comment } from "./comment";

export class Post {
    id!: number;
    title!: string;
    content!: string;
    addedDate!: Date;
    imageData!: string; // Change from File to string
    // tags!: Tag[];
    image!: File;
      comments!: Comment[]; // Define a comments property that is an array of Comment objects



}