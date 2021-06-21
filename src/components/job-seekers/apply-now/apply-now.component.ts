import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService } from 'src/components/common/firebase.service';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-apply-now',
  templateUrl: './apply-now.component.html',
  styleUrls: ['./apply-now.component.css']
})
export class ApplyNowComponent implements OnInit {
  public fg: FormGroup = new FormGroup({});
  constructor(private storage: AngularFireStorage,
    public fb: FormBuilder, public firebase: FirebaseService) { }

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
      picture: ['']
    });
  }
  public onSubmit = () => {
    this.firebase.addNewEmployee(this.fg.value).then(res => {
      this.fg.reset();
    });
  }
  uploadFile(event: any) {
    if (event && event.target.files.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.uploadFilesToFirebase(event.target.files[i]);
      }
    }
  }
  public uploadFilesToFirebase = (file: File) => {
    const filePath = `EmployeePictures/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((res: any) => {
          this.fg.controls.picture.setValue(res);
        });
      })
    )
      .subscribe();
  }
}
