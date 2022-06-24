import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Post } from '../model/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

    post: Post = {

      id: 1 ,
      postName: '',
      url: '',
      description: '',
      voteCount: 
      
    }
    submitted: boolean | undefined;

    constructor(private router: Router, private service:DataService) { }

    ngOnInit(): void {
    }

    savePost(): void {
      const data = {
        id: this.post.id,
        postName: this.post.postName,
        url: this.post.url,
        description: this.post.description,
        voteCount: this.post.voteCount
      };
      this.service.createPost(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.submitted = true;
          },
          error: (e) => console.error(e)
        });
    }
    newTutorial(): void {
      this.submitted = false;
      this.post = {
        id: this.post.id,
        postName: this.post.postName,
        url: this.post.url,
        description: this.post.description,
        voteCount: this.post.voteCount
      };
    }
}
