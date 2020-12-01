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

  user = this.authSvc.afAuth.user;
  email: string;


  constructor(private routes: Router, private authSvc: AuthService) {
    this.user.subscribe((user) => this.email = user.email)
  }

  back() {
    this.routes.navigate(['/'])
  }

  sendEmail() {
    this.authSvc.sendEmail();
  }

}
