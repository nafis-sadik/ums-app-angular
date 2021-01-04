import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { RoleDetailsComponent } from './role-details/role-details.component';
import { RoleListComponent } from './role-list/role-list.component';
import { UpdateRoleComponent } from './update-role/update-role.component';


const routes: Routes = [
  { path: '', component: RoleListComponent },
  { path: 'UpdateRole/:RoleId', component: UpdateRoleComponent },
  { path: 'RoleDetails/:RoleId', component: RoleDetailsComponent },
  { path: 'AddNewRole', component: AddRoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
