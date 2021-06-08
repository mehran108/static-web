import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/components/about/about.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { DealershipComponent } from 'src/components/dealership/dealership.component';
import { ServiceComponent } from 'src/components/service/service.component';
import { HomeComponent } from 'src/components/home/home.component';
import { CandidateSelectionComponent } from 'src/components/service/candidate-selection/candidate-selection.component';
import { WhyChooseComponent } from 'src/components/service/why-choose/why-choose.component';
import { WhatYouSaveComponent } from 'src/components/service/what-you-save/what-you-save.component';
import { OurCompanyComponent } from 'src/components/about/our-company/our-company.component';
import { CoreValuesComponent } from 'src/components/about/core-values/core-values.component';
import { JobSeekersComponent } from 'src/components/job-seekers/job-seekers.component';
import { ApplyNowComponent } from 'src/components/job-seekers/apply-now/apply-now.component';
import { JobsPinkComponent } from 'src/components/job-seekers/jobs-pink/jobs-pink.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dealership', component: DealershipComponent },
  { path: 'candidate-selection', component: CandidateSelectionComponent },
  { path: 'why-choose', component: WhyChooseComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'what-you-save', component: WhatYouSaveComponent },
  { path: 'our-company', component: OurCompanyComponent },
  { path: 'core-values', component: CoreValuesComponent },
  { path: 'job-seeker', component: JobSeekersComponent },
  { path: 'apply-now', component: ApplyNowComponent },
  { path: 'jobs-pink', component: JobsPinkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
