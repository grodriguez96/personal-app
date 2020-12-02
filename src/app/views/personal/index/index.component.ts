import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginUserComponent } from 'src/app/dialogs/login-user/login-user.component';
import { RegisterUserComponent } from 'src/app/dialogs/register-user/register-user.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalDataService } from 'src/app/services/localData/local-data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private dialog: MatDialog, private authSvc: AuthService, private localData: LocalDataService, private route: Router) { }

  /** Open dialog to register user. */
  register() {
    const dialogRef = this.dialog.open(RegisterUserComponent);
  }

  /** Open dialog to login user. */
  login() {
    const dialogRef = this.dialog.open(LoginUserComponent);
  }

  async loginGuest() {
    await this.authSvc.login(this.localData.emailGuest, this.localData.passwordGuest);
    this.route.navigate(['user']);
  }

}
