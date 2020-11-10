import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SecondaryNavComponent } from './secondary-nav/secondary-nav.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [SecondaryNavComponent, SearchComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [SearchComponent, SecondaryNavComponent],
})
export class SharedModule {}
