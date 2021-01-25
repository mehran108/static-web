import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreeSixtyModule } from '@mediaman/angular-three-sixty';
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
    ProjectAlraziqComponent,
    ProjectUpcomingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThreeSixtyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
