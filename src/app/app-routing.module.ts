// import { UserComponent } from './user-setup/user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LogInComponent } from './auth/log-in/log-in.component';

// Lazy loading
const routes: Routes = [
  {
    path: 'logInLazy',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'UserLazy',
    loadChildren: () =>
      import('../app/user-setup/user-setup.module').then(
        (m) => m.UserSetupModule
      ),
  },
  // { path: 'User', component: UserComponent },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: '', component: LogInComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
