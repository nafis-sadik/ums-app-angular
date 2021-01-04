import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from '../role-service.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  PageName: string;
  UserId:string;
  role:any={};
  constructor(private roleService:RoleServiceService) {
    this.PageName = 'Add Role';
   }

  ngOnInit(): void {
    this.UserId= localStorage.getItem('UserId');
    console.log(this.UserId);
  }
  AddRole(value):void{
  console.log(value);
 this.roleService.AddRoleInfo(value).subscribe((data) => {
});

}
}
