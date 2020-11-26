import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSetupRoutingModule } from './user-setup-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { IndexComponent } from './index/index.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    IndexComponent,
    ChangePasswordComponent,
    IndexComponent,
    ResetPasswordComponent,
    UpdateUserComponent,
  ],
  imports: [CommonModule, UserSetupRoutingModule, SharedModule],
})
export class UserSetupModule {}
