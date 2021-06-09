import { Routes, RouterModule } from '@angular/router';
import { AppMasterGuard } from 'src/common/app-master.guard';
import { AdminComponent } from './admin.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee-list' },
  { path: 'employee-list', component: AdminComponent, canActivate: [AppMasterGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'employee-detail/:id', component: EmployeeDetailComponent },
];

export const AdminRoutes = RouterModule.forChild(routes);
