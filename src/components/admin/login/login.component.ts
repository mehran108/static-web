import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/components/common/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  fg: FormGroup = new FormGroup({});
  constructor(public fb: FormBuilder, public firebase: FirebaseService, public router: Router) { }

  ngOnInit() {
    this.fg = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
    if (this.fg.valid) {
      const model = {
        ...this.fg.value
      }
      this.firebase.login(model.email, model.password).then(el => {
        this.router.navigate(['admin/employee-list'])
      });
    }
  }
}
