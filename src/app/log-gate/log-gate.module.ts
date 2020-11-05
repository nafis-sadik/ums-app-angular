import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogGateRoutingModule } from './log-gate-routing.module';
import { LogGateComponent } from './log-gate/log-gate.component';

@NgModule({
  declarations: [LogGateComponent],
  imports: [
    CommonModule,
    LogGateRoutingModule
  ]
})
export class LogGateModule { }
