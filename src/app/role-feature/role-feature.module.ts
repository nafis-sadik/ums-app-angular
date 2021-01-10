import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleFeatureRoutingModule } from './role-feature-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index/index.component';
import { FeatureDetailsComponent } from './featureDetails/featureDetails.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [IndexComponent,FeatureDetailsComponent,CreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RoleFeatureRoutingModule
  ]
})
export class RoleFeatureModule { }
