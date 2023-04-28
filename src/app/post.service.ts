import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Post } from './Models/PostComment/Post';

@Injectable({
    providedIn: 'root'
})
export class PostService {
    listPost: Post[] = [];
    constructor(private httpClient: HttpClient) { }

    addPost(post: Post): Observable<Post> {
        return this.httpClient.post<Post>(`${environment.api}test/addPost`, post);
    }

    updatePost(post: Post) {
        return this.httpClient.post<Post>(environment.api + "test/updatePost", post);
    }

    getPostById(id: number) {
        return this.httpClient.get<Post>(environment.api + "test/getPostById" + `/${id}`);
    }

    getAllPosts() {
        return this.httpClient.get<Post[]>(environment.api + "test/getAllPost")
    }

    deletePost(post: Post) {
        return this.httpClient.delete<Post>(`${environment.api}test/deletePost/${post.id}`);
    }

    getPostByUserId() {
        return this.httpClient.get<Post>(environment.api + "test/getPostByUserId");
    }





}
