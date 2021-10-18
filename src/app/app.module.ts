import { BrowserModule, Title } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import third-party module
import { AnimateOnScrollModule } from 'ngx-animate-on-scroll';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
