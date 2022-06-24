import { Injectable } from '@angular/core';

// Import HttpClient and add it to constructor
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Post } from '../model/post';

const baseUrl = 'http://localhost:8080/api/posts/list';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    constructor(
      private http: HttpClient
      ) { }
  
  
      public getAllPost(): Observable<Post[]>{
    return this.http.get<Post[]>('http://localhost:8080/api/posts/list');
    }

    create(data: any): Observable<any> {
      return this.http.post(baseUrl, data);
    }

  }

  