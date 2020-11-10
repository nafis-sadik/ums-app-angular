import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SecondaryNavComponent } from './secondary-nav/secondary-nav.component';
import { SearchComponent } from './search/search.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [SecondaryNavComponent, SearchComponent, SideNavComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [SearchComponent, SecondaryNavComponent, SideNavComponent],
})
export class SharedModule {}
