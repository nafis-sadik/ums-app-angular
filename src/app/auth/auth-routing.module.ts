import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [{ path: '', component: LogInComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
