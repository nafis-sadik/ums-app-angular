import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSetupRoutingModule } from './user-setup-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserSetupRoutingModule
  ]
})
export class UserSetupModule { }
