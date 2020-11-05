import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogGateComponent } from './log-gate/log-gate.component';

const routes: Routes = [
   { path: 'loggate', component: LogGateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogGateRoutingModule { }
