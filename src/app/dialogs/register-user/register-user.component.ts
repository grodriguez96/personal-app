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

  form: FormGroup;

  constructor(private fb: FormBuilder, private authSvc: AuthService, private route: Router) {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  async register() {
    const { email, password } = this.form.value;
    const result = await this.authSvc.register(email, password);
    if (result) {
      await this.authSvc.sendEmail();
      this.route.navigate(['verification'])
    }
  }

}
