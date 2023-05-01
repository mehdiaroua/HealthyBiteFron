import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from './Models/PostComment/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  listPost: Post[] = [];
  constructor(private httpClient: HttpClient) {}

  addPost(formData: FormData): Observable<Post> {
    return this.httpClient
      .post<Post>(`${environment.api}test/addPostWithImg`, formData)
      .pipe(
        catchError((error: any) => {
          console.log(error);
          return throwError(error);
        })
      );
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
}
