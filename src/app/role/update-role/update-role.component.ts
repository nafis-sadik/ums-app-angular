import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleServiceService } from '../role-service.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {
  public RoleId: any;
  PageName: string;
  UserId:string;
  role:any=[];
  constructor(private route: ActivatedRoute,
              private roleService:RoleServiceService,
              private router:Router) {
    this.PageName = 'Update Role';
   }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.RoleId = params['RoleId'];
    });
    this.UserId= localStorage.getItem('UserId');
    this.roleService.getRoleInformation(this.RoleId).subscribe((result) => {
      console.log(result);
      this.role=result;
    });
  }

UpdateRole(value):void{
 console.log(value);

 this.roleService.UpdateRoleInfo(value).subscribe((data) => {
  this.router.navigate(['/Role']);
});
}
}
