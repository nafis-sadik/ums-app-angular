import { IndexComponent } from './index/index.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'ChangePassword', component: ChangePasswordComponent },
  { path: 'ResetPassword', component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSetupRoutingModule {}
