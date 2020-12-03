import { User } from './../../shared/models/models.component';
import { UserSetupServiceService } from './../user-setup-service.service';
import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ignoreElements } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { observable } from 'rxjs';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  PageName: string;
  public UserId: string;
  public UserInfo: User = new User();
  constructor(
    private userSetupServiceService: UserSetupServiceService,
    private route: ActivatedRoute
  ) {
    this.PageName = 'User Data Update';
  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.UserId = params['UserId'];
    });

    if (this.UserId != null) {
      let data = this.userSetupServiceService
        .getUser(this.UserId)
        .subscribe((res) => {
          console.log('data');
          this.UserInfo.Name = res.name;
          this.UserInfo.UserId = res.userId;
          this.UserInfo.Cellno = res.cellno;
          this.UserInfo.Email = res.email;
          this.UserInfo.Dob = res.dob;
          console.log(res);
        });
    }
  }

  UpdateUserData(): void {
    this.userSetupServiceService.UpdateUserData(this.UserInfo).subscribe((data) => {
    });;
  }
}
