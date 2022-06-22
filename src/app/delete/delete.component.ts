import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

DeleteComponent: any
  http: any;
  status: any;
constructor() { }

  ngOnInit() 
  { this.http.delete('https://localhost/4200')
    .subscribe(()=> this.status)
  }

}
