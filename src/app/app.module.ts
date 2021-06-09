import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from 'src/components/about/about.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { DealershipComponent } from 'src/components/dealership/dealership.component';
import { ServiceComponent } from 'src/components/service/service.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeComponent } from 'src/components/home/home.component';
import { LightboxModule } from 'ngx-lightbox';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ThreeSixtyModule } from '@mediaman/angular-three-sixty';
import { FooterComponent } from 'src/components/footer/footer.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
// import third-party module
import { NgxAnimationsModule } from 'ngx-animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CandidateSelectionComponent } from 'src/components/service/candidate-selection/candidate-selection.component';
import { WhyChooseComponent } from 'src/components/service/why-choose/why-choose.component';
import { WhatYouSaveComponent } from 'src/components/service/what-you-save/what-you-save.component';
import { OurCompanyComponent } from 'src/components/about/our-company/our-company.component';
import { CoreValuesComponent } from 'src/components/about/core-values/core-values.component';
import { JobSeekersComponent } from 'src/components/job-seekers/job-seekers.component';
import { ApplyNowComponent } from 'src/components/job-seekers/apply-now/apply-now.component';
import { JobsPinkComponent } from 'src/components/job-seekers/jobs-pink/jobs-pink.component';
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DealershipComponent,
    ServiceComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CandidateSelectionComponent,
    WhyChooseComponent,
    WhatYouSaveComponent,
    OurCompanyComponent,
    CoreValuesComponent,
    JobSeekersComponent,
    ApplyNowComponent,
    JobsPinkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgxAnimationsModule,
    AppRoutingModule,
    ThreeSixtyModule,
    LightboxModule,
    NgxCaptchaModule,
    SlickCarouselModule,
    NgxImageZoomModule,
    FormsModule,
    // AgGridModule.withComponents(),
    // AgGridModule.forRoot(),
    ReactiveFormsModule // <-- Add this line

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: BUCKET, useValue: 'gs://fitness-application-f9bd9.appspot.com/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
