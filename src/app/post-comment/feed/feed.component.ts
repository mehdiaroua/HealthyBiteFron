import { Component, Renderer2, NgModule, OnInit } from '@angular/core';
import { Post } from 'src/app/Models/PostComment/Post';
import { PostService } from 'src/app/post.service';
import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  template: `
    <button (click)="toggleDarkTheme()">Toggle Dark Theme</button>
    <div>Hello World!</div>
  `,
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  posts: Post[] = [];
  currentPage = 1;
  postsPerPage = 5;
  constructor(private postService: PostService, private renderer: Renderer2) { }
  isDarkTheme = false;


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

  

  toggleDarkTheme() {
    this.isDarkTheme = !this.isDarkTheme;

    if (this.isDarkTheme) {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
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
