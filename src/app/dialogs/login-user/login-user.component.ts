import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
  providers: [AuthService]
})
export class LoginUserComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private authSvc: AuthService, private route: Router) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  async login() {
    const { email, password } = this.form.value;
    const result = await this.authSvc.login(email, password);
    if (result.user.emailVerified) {
      this.route.navigate(['user'])
    } else {
      this.route.navigate(['verification'])
    }
  }

}
