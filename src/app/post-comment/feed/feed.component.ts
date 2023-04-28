import { Component, NgModule, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/PostComment/Post';
import { PostService } from 'src/app/post.service';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  posts: Post[] = [];
  currentPage = 1;
  postsPerPage = 5;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  postImageURL(imageData: string): string {
    return `data:image/jpeg;base64,${imageData}`;
  }
  nextPage() {
    this.currentPage++;
    window.scrollTo(0, 0);
  }


  previousPage() {
    this.currentPage--;
    window.scrollTo(0, 0);
  }


  getAllPosts() {
    this.postService.getAllPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }

  deletePost(posts: Post): void {
  if (confirm("Are you sure you want to delete this post?")) {
    this.postService.deletePost(posts).subscribe(() => {
      this.posts = this.posts.filter(p => p !== posts);
    });
  }
}




}
