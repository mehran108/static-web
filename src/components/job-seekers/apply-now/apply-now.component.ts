import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/components/common/firebase.service';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})
export class ApplyNowComponent implements OnInit {
  public fg: FormGroup = new FormGroup({});
  constructor(public fb: FormBuilder, public firebase: FirebaseService) { }

  ngOnInit() {
    this.initializeForm();
  }
  public initializeForm = () => {
    this.fg = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      birthDate: [''],
      gender: [''],
      address: [''],
      phone: [''],
      cell: [''],
      intersection: [''],
      province: [''],
      city: [''],
      postalCode: [''],
      email: [''],
      ownVehicle: [''],
      jobCategory: [''],
      jobType: [''],
      jobShift: [''],
      additionalInfo: [''],
    });
  }
  public onSubmit = () => {
    this.firebase.addNewEmployee(this.fg.value).then(res => {
      this.fg.reset();
    });
  }
}
