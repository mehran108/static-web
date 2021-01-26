import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from 'src/components/about/about.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { DealershipComponent } from 'src/components/dealership/dealership.component';
import { LifestyleComponent } from 'src/components/lifestyle/lifestyle.component';
import { ProjectOverviewComponent } from 'src/components/project-overview/project-overview.component';
import { ServiceComponent } from 'src/components/service/service.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeComponent } from 'src/components/home/home.component';
import { PanoramaImageRendererComponent } from 'src/components/project-overview/panorama-image-renderer/panorama-image-renderer.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ThreeSixtyModule } from '@mediaman/angular-three-sixty';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DealershipComponent,
    LifestyleComponent,
    ProjectOverviewComponent,
    ServiceComponent,
    HeaderComponent,
    HomeComponent,
    PanoramaImageRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThreeSixtyModule,
    NgxCaptchaModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
