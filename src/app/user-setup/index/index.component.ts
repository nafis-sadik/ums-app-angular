import { Component, OnInit } from '@angular/core';
import { UserSetupServiceService } from '../user-setup-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  PageName: string;
  Users: any[] = [
    {
      userId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      userId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      userId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      userId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      userId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      userId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      userId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      userId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      userId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
    {
      userId: '',
      Name: '',
      email: '',
      Contact: '',
      status: '',
      Id: 1,
    },
  ];
  constructor(private userSetupServiceService: UserSetupServiceService) {
    this.PageName = 'User List';
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
}
