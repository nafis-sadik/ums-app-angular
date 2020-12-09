import { UserSetupServiceService } from './../user-setup-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  PageName: string;
  Users: any[] = [
    {
      UserId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      UserId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      UserId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      UserId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      UserId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      UserId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      UserId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      UserId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      UserId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      UserId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
  ];

  constructor(private userSetupServiceService: UserSetupServiceService) {
    this.PageName = 'Reset Password';
  }

  ngOnInit(): void {
    this.userSetupServiceService.getUsers(1).subscribe((result) => {
      for (let i = 0; i < this.Users.length; i++) {
        this.Users[i].UserId = result[i].userId;
        this.Users[i].Name = result[i].name;
        this.Users[i].Email = result[i].email;
        this.Users[i].Contact = result[i].cellno;
        this.Users[i].status = result[i].status;
        this.Users[i].Id = i;
      }
    });
  }

  LoadData(PageNumber: Number): void {
    this.userSetupServiceService.getUsers(PageNumber).subscribe((result) => {
      for (let i = 0; i < this.Users.length; i++) {
        this.Users[i].UserId = result[i].userId;
        this.Users[i].Name = result[i].name;
        this.Users[i].Email = result[i].email;
        this.Users[i].Contact = result[i].cellno;
        this.Users[i].status = result[i].status;
        this.Users[i].Id = i;
      }
    });
  }
  ResetPassword(UserId){
    console.log(UserId);
    this.userSetupServiceService.ResetPassword(UserId).subscribe((data) => {
    });
  }
}
