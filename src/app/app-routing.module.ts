import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './auth/log-in/log-in.component';

// Lazy loading
const routes: Routes = [
  {
    path: 'User',
    loadChildren: () =>
      import('../app/user-setup/user-setup.module').then(
        (m) => m.UserSetupModule
      ),
  },
  {
    path: 'Home',
    loadChildren: () =>
      import('../app/dashboard/dashboard-routing.module').then(
        (m) => m.DashboardRoutingModule
      ),
  },
  { path: '', component: LogInComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
