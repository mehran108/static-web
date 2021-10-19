import { BrowserModule, Title } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from 'src/components/banner/banner.component';
import { IntroductionComponent } from 'src/components/introduction/introduction.component';
import { AboutComponent } from 'src/components/about/about.component';
import { GoalsComponent } from 'src/components/goals/goals.component';
import { ClientsComponent } from 'src/components/clients/clients.component';
import { EventComponent } from 'src/components/event/event.component';
import { ServicesComponent } from 'src/components/services/services.component';
import { SolutionComponent } from 'src/components/solution/solution.component';
import { OfficeComponent } from 'src/components/office/office.component';
import { FashionComponent } from 'src/components/fashion/fashion.component';
import { TeamComponent } from 'src/components/team/team.component';
import { CoreValuesComponent } from 'src/components/core-values/core-values.component';
import { MissionComponent } from 'src/components/mission/mission.component';
import { MomentComponent } from 'src/components/moment/moment.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    IntroductionComponent,
    AboutComponent,
    GoalsComponent,
    ClientsComponent,
    EventComponent,
    ServicesComponent,
    SolutionComponent,
    OfficeComponent,
    FashionComponent,
    TeamComponent,
    CoreValuesComponent,
    MissionComponent,
    MomentComponent
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
