import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  PageName: string;
  constructor() {
    this.PageName = 'Change Password';
  }

  ngOnInit(): void {}
}
