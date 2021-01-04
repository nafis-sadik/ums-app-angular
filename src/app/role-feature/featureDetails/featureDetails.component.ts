import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoleFeatureService } from '../role-feature.service';

@Component({
  selector: 'app-featureDetails',
  templateUrl: './featureDetails.component.html',
  styleUrls: ['./featureDetails.component.scss']
})
export class FeatureDetailsComponent implements OnInit {

PageName: string;
RoleDetailId:any;
RoleDetailInfo:any=[];
AppName:any;
  constructor(private route:ActivatedRoute,
    private roleFeatureService:RoleFeatureService) { 
    this.PageName = 'Role-wise Assigned Feature details';
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.RoleDetailId = params['roleDtlId'];
    });
    
    console.log(this.RoleDetailId);
    this.roleFeatureService.roleFeatureInformation(this.RoleDetailId).subscribe((result) => {
      console.log(result);
      this.RoleDetailInfo=result;
    });
  }
}

