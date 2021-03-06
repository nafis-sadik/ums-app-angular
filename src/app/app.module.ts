import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
