import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import {HttpErrorResponse} from '@angular/common/http';
import { Post } from '../model/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent implements OnInit {
  post: Post = {
    postName: '',
    description: '', 
  };
  submitted = false;
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
  }
  savePost(): void {
    const data = {
      title: this.post.postName,
      description: this.post.description
    };
    this.dataService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newPost(): void {
    this.submitted = false;
    this.post = {
      postName: '',
      description: '',
      voteCount: 3
    };
  }
}
