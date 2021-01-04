import { Component, OnInit } from '@angular/core';
import { RoleFeatureService } from '../role-feature.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  PageName: string;
  rolefeature:any=[];
  constructor(private roleFeatureService:RoleFeatureService) {
    this.PageName = 'Role-wise Assigned Feature List';
   }

  ngOnInit() {
    this.roleFeatureService.roleFeatureInformations(1).subscribe((result) => {    
      console.log(result);
      this.rolefeature=result;
    });
  }
  LoadData(PageNumber: Number): void {
    this.roleFeatureService.roleFeatureInformations(PageNumber).subscribe((result) => {    
      console.log(result);
      this.rolefeature=result;
    });
  }
}
