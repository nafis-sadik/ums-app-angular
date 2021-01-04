import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  PageName: string;

  constructor() {
    this.PageName = 'Create Role-wise Assigned Feature';
   }

  ngOnInit() {
  }

}
