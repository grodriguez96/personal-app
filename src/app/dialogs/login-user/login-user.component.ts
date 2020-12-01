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
  private passwordPattern: any = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  form: FormGroup;

  constructor(private fb: FormBuilder, private authSvc: AuthService, private route: Router) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)]),
    })
  }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  async login() {
    const { email, password } = this.form.value;

    const result = await this.authSvc.login(email, password);

    /** If 'result' that means user was registered. If email is verified go to user page else verification page. */
    result.user.emailVerified ? this.route.navigate(['user']) : this.route.navigate(['verification'])
  }

}
