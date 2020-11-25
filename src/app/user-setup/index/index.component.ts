import { Component, OnInit } from '@angular/core';
import { UserSetupServiceService } from '../user-setup-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  PageName: string;
  private userSetupServiceService: UserSetupServiceService;
  Users: any[] = [
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
    {
      UserId: 'vvipsection',
      Name: 'শাখা প্রধান-ভিভিআইপি',
      email: 'vvip@info.com',
      Contact: '2455',
      status: 'Authorized',
      Id: 1,
    },
  ];
  constructor() {
    this.PageName = 'User List';
  }

  ngOnInit(): void {
    console.log('success');
    this.userSetupServiceService.getUsers().subscribe((result) => {
      console.log(result);
    });
  }
}
