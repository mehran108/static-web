import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/components/about/about.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { DealershipComponent } from 'src/components/dealership/dealership.component';
import { LifestyleComponent } from 'src/components/lifestyle/lifestyle.component';
import { ProjectOverviewComponent } from 'src/components/project-overview/project-overview.component';
import { ServiceComponent } from 'src/components/service/service.component';
import { HomeComponent } from 'src/components/home/home.component';
import { ProjectAlraziqComponent } from 'src/components/project-alraziq/project-alraziq.component';
import { ProjectUpcomingComponent } from 'src/components/project-upcoming/project-upcoming.component';
import { PanoramaImageRendererComponent } from 'src/components/project-overview/panorama-image-renderer/panorama-image-renderer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dealership', component: DealershipComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'project', component: ProjectOverviewComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'alraziq', component: ProjectAlraziqComponent },
  { path: 'upcoming', component: ProjectUpcomingComponent },
  { path: 'panorama', component: PanoramaImageRendererComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
