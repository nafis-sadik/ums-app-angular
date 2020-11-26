import { UserSetupServiceService } from './../user-setup-service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  oldPass: string = '';

  newPass: string;
  ConfirmPass: string;
  PageName: string;
  constructor(private userSetupServiceService: UserSetupServiceService) {
    this.PageName = 'Change Password';
  }

  ngOnInit(): void {}

  ChangePassword(OldPass, NewPass, ConfirmPass): void {
    if (NewPass != ConfirmPass) {
      alert('NewPass & ConfirmPass did not match');
      return;
    }
    this.userSetupServiceService
      .ChangePass(OldPass, NewPass)
      .subscribe((res) => {
        console.log(res);
        alert('Success');
      });
  }
}
