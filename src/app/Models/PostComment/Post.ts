import { Tag } from "./Tag";

export class Post {
    id!: number;
    title!: string;
    content!: string;
    addedDate!: Date;
    imageData!: string; // Change from File to string
    tags!: Tag[];



}