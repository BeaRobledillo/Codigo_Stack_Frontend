import { Injectable } from '@angular/core';

// Import HttpClient and add it to constructor
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    url:string='http://localhost:8080/api/posts/list';

    constructor(
      private http: HttpClient
      ) { }
  
      baseUrl = 'http://localhost:8080/api/posts/list';
  
      public getAllPost(): Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:8080/api/posts/list');
    }

    public getPostById(id:number): Observable<Post>{
      return this.http.get<Post>(`${this.baseUrl}/${id}`);
    }

    createPost(post: Post) {
      return this.http.post<Post>(this.url,post);
    }

    updatePost(id: any, data: any): Observable<any> {
      return this.http.put(`${this.baseUrl}/${id}`, data);
    }
    deletePost(id: any): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`);
    }
  }

  