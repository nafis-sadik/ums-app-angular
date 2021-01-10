import { Component, OnInit, ViewChild } from '@angular/core';
import { RoleFeatureService } from '../role-feature.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  PageName: string;
  UserId: string;
  appList: any = [];
  roleList: any = [];
  appModuleList: any = [];
  featureList: any = [];
  model: any = {};

  @ViewChild('addRoleFeature', {}) form: NgForm;

  constructor(private roleFeatureService: RoleFeatureService) {
    this.PageName = 'Create Role-wise Assigned Feature';
  }

  ngOnInit() {
    this.UserId = localStorage.getItem('UserId');
    console.log(this.UserId);

    this.roleFeatureService.dropDownList().subscribe((result) => {
      this.appList = result.apps;
      this.roleList = result.roles;
    });
  }

  selectedApp(AppId: any, model: any) {
    model.moduleId = '';
    model.featureId = '';
    this.roleFeatureService.appModuleList(AppId).subscribe((result) => {
      this.appModuleList = result;
    });
    this.featureList = null;
  }

  selectModule(ModuleId: any, model: any) {
    model.featureId = '';
    if (ModuleId == '') {
      return (this.featureList = null);
    }
    this.roleFeatureService.featureList(ModuleId).subscribe((result) => {
      this.featureList = result;
    });
  }

  AddRoleFeature(value: any) {
    console.log(value);
    if (
      value.roleId == '' ||
      value.appId == '' ||
      value.moduleId == '' ||
      value.featureId == ''
    ) {
      return Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Check Select List.',
        showConfirmButton: false,
        timer: 2000,
      });
    }
    //EditYN,ViewDetailYN,AuthYN,CancelYN

    if (value.createYN == true) {
      value.createYN = 'Y';
    } else {
      value.createYN = 'N';
    }
    if (value.editYN == true) {
      value.editYN = 'Y';
    } else {
      value.editYN = 'N';
    }
    if (value.viewDetailYN == true) {
      value.viewDetailYN = 'Y';
    } else {
      value.viewDetailYN = 'N';
    }
    if (value.authYN == true) {
      value.authYN = 'Y';
    } else {
      value.authYN = 'N';
    }
    if (value.cancelYN == true) {
      value.cancelYN = 'Y';
    } else {
      value.cancelYN = 'N';
    }
    value.roleId = parseInt(value.roleId);
    console.log(value);

    this.roleFeatureService.AddRoleDetailInfo(value).subscribe((data) => {});
  }
}
