import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from '../role-service.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css'],
})
export class RoleListComponent implements OnInit {
  RoleInfo: any = [];
  PageName: string;

  constructor(private roleService: RoleServiceService) {
    this.PageName = 'Role List';
  }

  ngOnInit(): void {
    this.roleService.getRoleInformations(1).subscribe((result) => {    
      this.RoleInfo = result;
      console.log(this.RoleInfo);
    });
  }
  LoadData(PageNumber: Number): void {
    this.roleService.getRoleInformations(PageNumber).subscribe((result) => {
      this.RoleInfo = result;
    });
  }
}
