
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

  {
    path: 'Role',
    loadChildren: () =>
      import('../app/role/role.module').then(
        (m) => m.RoleModule
      ),
  },
  {
    path: 'RoleFeature',
    loadChildren: () =>
      import('../app/role-feature/role-feature.module').then(
        (m) => m.RoleFeatureModule
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
