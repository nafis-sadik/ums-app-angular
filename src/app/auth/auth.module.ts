import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthServiceService } from './auth-service.service';

@NgModule({
  declarations: [LogInComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
  exports: [LogInComponent],
  providers: [AuthServiceService],
})
export class AuthModule {}
