import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css'],
  providers: [AuthService]
})
export class VerificationComponent {

  constructor(private authSvc: AuthService) {

  }

  sendEmail() {
    this.authSvc.sendEmail();
  }
}
