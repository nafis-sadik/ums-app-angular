import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RoleListComponent, RoleDetailsComponent, AddRoleComponent, UpdateRoleComponent],
  imports: [
    CommonModule,
    SharedModule,
    RoleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RoleModule { }
