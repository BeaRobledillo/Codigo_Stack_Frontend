import { Component, OnInit } from '@angular/core';
import { DataService, } from '../service/data.service';

const baseUrl ='http://localhost:8080/api/posts/list'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})

export class DeleteComponent implements OnInit {

constructor() { }

  ngOnInit(): void 
  {}

  delete (id: number): void {
    this..DeleteComponent(id).subscribe(
      () => {
        this.();
      },
      () => {
        console.log();
      }
    );
  }
}
