import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleServiceService } from '../role-service.service';
@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {
  PageName: string;
  public RoleId: any;
  role:any=[];
  constructor(private route: ActivatedRoute,private roleService:RoleServiceService) {
    this.PageName = 'Role Details';
   }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.RoleId = params['RoleId'];
    });

    this.roleService.getRoleInformation(this.RoleId).subscribe((result) => {
      console.log(result);
      this.role=result;
    });
  }

}
