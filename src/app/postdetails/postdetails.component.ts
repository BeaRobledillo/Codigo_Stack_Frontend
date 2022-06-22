import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Post } from '../model/post';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { PostListComponent } from '../post-list/post-list.component';
import { Location } from '@angular/common';
@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss'],
})
export class PostdetailsComponent implements OnInit {
  
  post!: Post;
  //propertyId: number = 1;
  //id:number=1;
  postId:string="1";

  constructor(private dataService: DataService,private route: ActivatedRoute,private Location:Location) {
    console.log(this.Location.path())
    //this.postId=(this.Location.path()[this.Location.path().length-1])
    this.postId=(this.Location.path().toString().replace("/details?id=",""))
  }
  // constructor(private dataService: DataService,private route: ActivatedRoute) {

  // }

  ngOnInit() {
    // this.route.queryParams.subscribe(params => {
    //   this.id = params['id'];
    this.getPostbyId();
    // });
  }
  selectedPost?: Post;
  onSelect(post: Post): void {
    this.selectedPost = post;
  }
  public getPostbyId(): void {
    this.dataService.getPostById(Number(this.postId)).subscribe({
      next: (response: Post) => {
      
        this.post = response;
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
