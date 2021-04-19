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
import { ProjectAlraziqComponent } from 'src/components/project-alraziq/project-alraziq.component';
import { ProjectUpcomingComponent } from 'src/components/project-upcoming/project-upcoming.component';
import { LightboxModule } from 'ngx-lightbox';
import { PanoramaImageRendererComponent } from 'src/components/project-overview/panorama-image-renderer/panorama-image-renderer.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ThreeSixtyModule } from '@mediaman/angular-three-sixty';
import { FooterComponent } from 'src/components/footer/footer.component';
import { UpcomingKallarKaharComponent } from 'src/components/upcoming-kallar-kahar/upcoming-kallar-kahar.component';
import { UpcomingSupremeCityComponent } from 'src/components/upcoming-supreme-city/upcoming-supreme-city.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
// import third-party module
import { AnimateOnScrollModule } from 'ngx-animate-on-scroll';

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
    PanoramaImageRendererComponent,
    ProjectAlraziqComponent,
    ProjectUpcomingComponent,
    FooterComponent,
    UpcomingKallarKaharComponent,
    UpcomingSupremeCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThreeSixtyModule,
    LightboxModule,
    NgxCaptchaModule,
    AnimateOnScrollModule.forRoot(),
    NgxImageZoomModule // <-- Add this line

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
