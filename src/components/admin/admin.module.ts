import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { AdminRoutes } from './admin.routing';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
@NgModule({
  imports: [
    CommonModule,
    AgGridModule.forRoot(),
    AdminRoutes,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [AdminComponent, LoginComponent, EmployeeDetailComponent]
})
export class AdminModule { }
