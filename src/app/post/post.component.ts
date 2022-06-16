import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import {DataService} from '../service/data.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post!:Post;
  postList:Post[]=[];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  public getPosts(): void{
    this.dataService.getAllPost().subscribe({
      next: (response: Post[]) => {
        console.log(response);
        this.postList = response;
        console.log(this.postList);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }


}
