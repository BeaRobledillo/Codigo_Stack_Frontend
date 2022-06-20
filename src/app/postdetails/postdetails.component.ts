import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpErrorResponse
} from '@angular/common/http';
import {
  Post
} from '../model/post';
import {
  DataService
} from '../service/data.service';


@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent implements OnInit {
  post!: Post;
  postList: Post[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  public getPosts(): void {
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
