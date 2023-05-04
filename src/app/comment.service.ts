import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './Models/PostComment/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:8080'; // replace with your backend URL

  constructor(private http: HttpClient) { }

  getCommentsByPost(postId: number): Observable<Comment[]> {
    const url = `${this.baseUrl}/api/test/getCommentsByPost/${postId}`;
    return this.http.get<Comment[]>(url);
  }

   addComment(postId: number, comment: Comment): Observable<Comment> {
    const url = `${this.baseUrl}/api/test/${postId}/comments`;
    return this.http.post<Comment>(url, comment);
   }
  
  deleteComment(id: number): Observable<void> {
    const url = `${this.baseUrl}/api/test/deleteComment/${id}`;
    return this.http.delete<void>(url);
  }

  addReply(commentId: number, comment: Comment): Observable<Comment> {
  return this.http.post<Comment>(`${this.baseUrl}/api/test/${commentId}/replies`, comment)
}

}
