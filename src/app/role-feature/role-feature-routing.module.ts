import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FeatureDetailsComponent } from './featureDetails/featureDetails.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'FeatureDetail/:roleDtlId', component: FeatureDetailsComponent },
  { path: 'Create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleFeatureRoutingModule { }
