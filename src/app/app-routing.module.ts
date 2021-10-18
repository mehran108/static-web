import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'dealership', component: DealershipComponent },
  // { path: 'lifestyle', component: LifestyleComponent },
  // { path: 'project', component: ProjectOverviewComponent },
  // { path: 'service', component: ServiceComponent },
  // { path: 'alraziq', component: ProjectAlraziqComponent },
  // { path: 'upcoming', component: ProjectUpcomingComponent },
  // { path: 'panorama', component: PanoramaImageRendererComponent },
  // { path: 'kallar-kahar', component: UpcomingKallarKaharComponent },
  // { path: 'supreme-city', component: UpcomingSupremeCityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
