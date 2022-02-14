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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
// import { NgxSpinnerModule } from "ngx-spinner";

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
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    // NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [Title,
    {
      provide: MatDialogRef,
      useValue: {}
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
