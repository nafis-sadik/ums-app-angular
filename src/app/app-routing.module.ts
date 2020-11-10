// import { UserComponent } from './user-setup/user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
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
  { path: '', component: LogInComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
