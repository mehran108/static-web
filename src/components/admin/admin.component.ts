import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NameRendererComponent } from 'src/common/name-renderer';
import { FirebaseService } from '../common/firebase.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public employeeList: any;
  public columnDefs = [
    {
      field: 'name',
      cellRenderer: 'nameRenderer',
      cellRendererParams: {
        onClick: this.openEmployee.bind(this),
      },
    },
    {
      field: 'phone'
    },
    {
      field: 'email'
    },
    {
      field: 'jobCategory'
    },
    {
      field: 'jobType'
    },
    {
      field: 'gender',
      width: 130
    },
    {
      field: 'intersection'
    },
  ];
  gridOptions = {};
  defaultColDef = {};
  public modules = AllCommunityModules
  constructor(public fb: FirebaseService, public router: Router) {
    this.defaultColDef = {
      resizable: true,
      sortable: true,
      filter: true
    };
    this.gridOptions = {
      frameworkComponents: {
        'nameRenderer': NameRendererComponent,
      },
      pagination: true,
      paginationAutoPageSize: true,

    };
  }

  ngOnInit() {
    this.fb.GetAllEmployee().subscribe(res => {
      this.employeeList = res.map(e => {
        return {
          ...e.payload.doc.data() as any,
          id: e.payload.doc.id
        };
      });
      this.employeeList = this.employeeList.map((e: any) => {
        return {
          ...e,
          name: `${e.firstName} ${e.middleName} ${e.lastName}`
        };
      });
    })
  }
  onGridReady = (params: any) => {

  }
  openEmployee(el: any) {
    if (el.rowData) {
      this.router.navigate([`/admin/employee-detail/${el.rowData.id}`])
    }
  }
}
