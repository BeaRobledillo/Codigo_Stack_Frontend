import { Injectable } from '@angular/core';

// Import HttpClient and add it to constructor
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {
  
    constructor(
      private http: HttpClient
      ) { }
  
      // Get Pokemons from API
      // limit: number of pokemons
      // offset: the pokemons "page"
      // api will return first page, then second, third, etc
      // This is how api works and how we use it on our app
      getPost(limit: number, offset: number){
        // connect to the api requesting just 10 pokemons
        // that is how this api is built
        // If it's the first page, return normally.
        // If not, multiply by "limit" to skip previous page pokemons
        if(offset>0){
          offset *= limit;
        }
        return this.http.get(`http://localhost:8080/api/posts/list
        ?limit=${limit}&offset=${offset}`)
      }
  
      // Get More Pokemons from Api
      getMoreData(name: string){
        // return data from pokemon we passed as name
        return this.http.get(`http://localhost:8080/api/posts/
        ${name}`);
      }
  }