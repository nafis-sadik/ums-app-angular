import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css'],
})
export class ModelsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

export class User {
  UserId: string;
  Name: string;
  CategoryId: Number;
  Cellno: string;
  Email: string;
  Dob: Date;
  Catidval: string;
  Mfa: string;
  Macaddress: string;
  Ipaddress: string;
  Recstatus: string;
  Picture: string;
  Signature: string;
  Thumb: string;
}
