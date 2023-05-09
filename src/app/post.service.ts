import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { LikeType, Post } from './Models/PostComment/Post';
import { StorageService } from './Service1/storage.service';
import { User } from './Class/user';

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

    // Add the filter for bad words
    const badWords = ['badword1', 'badword2', 'badword3'];
    for (const word of badWords) {
        content = content.replace(word, '***');
    }

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

  updatePostAndImage(id: number, title: string, content: string,  userId: number, image?: File): Observable<Post> {
    
  const formData = new FormData();
  formData.append('id', id.toString());
  formData.append('title', title);
    formData.append('content', content);
      formData.append('userId', userId.toString()); // Add userId to the FormData

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



  toggleLikesP(postId: number, likeType: string, user: number): Observable<Post> {
    const url = `${this.baseUrl}/api/test/posts/${postId}?likeType=${likeType}&user=${user}`;
    return this.httpClient.put<Post>(url, null);
  }

  toggleLikesC(commentId: number, likeType: LikeType, user: number): Observable<Comment> {
    const url = `${this.baseUrl}/api/test/posts/${commentId}?likeType=${likeType}&user=${user}`;
    return this.httpClient.put<Comment>(url, null);  }

  
}
