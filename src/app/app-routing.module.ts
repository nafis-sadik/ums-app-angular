import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: 'loggateroute', loadChildren: () => import('log-gate/log-gate.module').then(m => m.LogGateModule) }
  {
    path: 'loggateroute',
    loadChildren: './log-gate/log-gate.module#LogGateModule',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
