import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginUserComponent } from 'src/app/dialogs/login-user/login-user.component';
import { RegisterUserComponent } from 'src/app/dialogs/register-user/register-user.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  constructor(private dialog: MatDialog) { }

  register() {
    const dialogRef = this.dialog.open(RegisterUserComponent);
  }

  login() {
    const dialogRef = this.dialog.open(LoginUserComponent);
  }

}
