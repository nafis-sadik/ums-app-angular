import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazy loading
const routes: Routes = [
  {
    path: 'User',
    loadChildren: () =>
      import('../app/user-setup/user-setup.module').then(
        (m) => m.UserSetupModule
      ),
  },
  // {
  //   path: 'Home',
  //   loadChildren: () =>
  //     import('../app/dashboard/dashboard.module').then(
  //       (m) => m.DashboardModule
  //     ),
  // },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/auth/auth.module').then((m) => m.AuthModule),
  },
  // { path: '', component: LogInComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
