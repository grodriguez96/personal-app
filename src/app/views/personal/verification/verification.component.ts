import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
  providers: [AuthService]

})
export class VerificationComponent {

  email: string;


  constructor(private routes: Router, private authSvc: AuthService) {
    this.authSvc.afAuth.onAuthStateChanged(user => this.email = user.email)
  }

  /** Go to index page. */
  back() {
    this.routes.navigate(['/'])
  }

  /** Resend email verification. */
  sendEmail() {
    this.authSvc.sendEmail();
  }

}
