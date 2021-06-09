import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/components/common/firebase.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  public employeeList: any;
  public currentEmployee: any;
  constructor(public fb: FirebaseService, public route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.fb.GetAllEmployee().subscribe((res: any) => {
        this.employeeList = res.map((e: any) => {
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
        this.currentEmployee = this.employeeList.find((el: any) => el.id === params.id)
      })
    })
  }
  onBack() {
    this.router.navigate(['/admin/employee-list'])
  }
}
