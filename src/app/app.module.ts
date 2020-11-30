import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**Angular-Firebase */
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireModule } from '@angular/fire'

/** Components */
import { AppComponent } from './app.component';
import { IndexComponent } from './views/personal/index/index.component';
import { RegisterUserComponent } from './dialogs/register-user/register-user.component';
import { LoginUserComponent } from './dialogs/login-user/login-user.component';

/** Angular Material */
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VerificationComponent } from './views/personal/verification/verification.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterUserComponent,
    LoginUserComponent,
    VerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
