import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent {

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
    console.log(result.user.email)
    if (result) {
      await this.authSvc.sendEmail();
      console.log((await this.authSvc.afAuth.currentUser).emailVerified)
      this.route.navigate(['auth/verification'])
    }
  }
}
