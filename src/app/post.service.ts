import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from './Models/PostComment/Post';
import { StorageService } from './service/storage.service';
import { User } from './Class/user';
import { Like } from './Models/PostComment/Like';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  listPost: Post[] = [];
    private baseUrl = 'http://localhost:8080'; 
  user!: any;
  constructor(private httpClient: HttpClient,private storage: StorageService) {}

  // addPost(formData: FormData): Observable<Post> {
  //   return this.httpClient
  //     .post<Post>(`${environment.api}test/addPostWithImg`, formData)
  //     .pipe(
  //       catchError((error: any) => {
  //         console.log(error);
  //         return throwError(error);
  //       })
  //     );
  // }

    addPost(title:string, content: string, image: File): Observable<Post> {
    this.user = this.storage.getUser();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image, image.name);
    formData.append('user', this.user.id.toString());

    return this.httpClient.post<Post>(`${environment.api}test/addPostWithImg`, formData);
  }

    getUserByPost(postId: number): Observable<User> {
    const url = `${this.baseUrl}/api/test/posts/${postId}/user`;
    return this.httpClient.get<User>(url);
  }

  getPostById(id: number) {
    return this.httpClient.get<Post>(
      environment.api + 'test/getPostById' + `/${id}`
    );
  }

  // updatePost(post: Post) {
  //   return this.httpClient.post<Post>(
  //     environment.api + 'test/updatePost',
  //     post
  //   );
  // }

  updatePostAndImage(id: number, title: string, content: string, image?: File): Observable<Post> {
  const formData = new FormData();
  formData.append('id', id.toString());
  formData.append('title', title);
  formData.append('content', content);
  if (image) {
    formData.append('image', image, image.name);
  }
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');

return this.httpClient.put<Post>(`${environment.api}test/updatePostWithImg`, formData, { headers })
  .pipe(
    catchError(error => {
      console.log(error);
      return throwError(error);
    })
  );
}

  getAllPosts() {
    return this.httpClient.get<Post[]>(environment.api + 'test/getAllPost');
  }

  deletePost(post: Post) {
    return this.httpClient.delete<Post>(
      `${environment.api}test/deletePost/${post.id}`
    );
  }

  getPostByUserId() {
    return this.httpClient.get<Post>(environment.api + 'test/getPostByUserId');
  }

  toggleLikeOnPost(postId: number, likeType: string) {
    return this.httpClient.put(`${this.baseUrl}/api/test/posts/${postId}?likeType=${likeType}`, {});
  }

}
