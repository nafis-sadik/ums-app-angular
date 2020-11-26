import { UserSetupServiceService } from './../user-setup-service.service';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  PageName: string;
  constructor(private userSetupServiceService: UserSetupServiceService) {
    this.PageName = 'User Data Update';
  }

  ngOnInit(): void {
    let data = this.userSetupServiceService
      .getUser(localStorage.getItem('UserId'))
      .subscribe((res) => {
        console.log(res);
      });
  }

  UpdateUserData(): void {}
}
