import { Injectable } from '@angular/core';

// Import HttpClient and add it to constructor
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    url:string='http://localhost:8080/';

    constructor(
      private http: HttpClient
      ) { }
  
  
      public getAllPost(): Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:8080/api/posts/list');
    }

    public getPostById(): Observable<Post>{
      return this.http.get<Post>(`${this.url}\${id}`);
    }
  }

  