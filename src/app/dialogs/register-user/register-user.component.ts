import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [AuthService]
})
export class RegisterUserComponent {

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


  async register() {
    /** Get email and password from form. */
    const { email, password } = this.form.value;

    /** Pass const and await for response from firebase. */
    const result = await this.authSvc.register(email, password);

    /** If 'result' that means was registered successfully. */
    if (result) {

      /**Send verification email and go to verification page. */
      await this.authSvc.sendEmail();
      this.route.navigate(['verification'])
    }
  }

}
