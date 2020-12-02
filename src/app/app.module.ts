/** Angular*/
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';



/**Angular-Firebase */
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireModule } from '@angular/fire'

/** Components */
import { AppComponent } from './app.component';
import { IndexComponent } from './views/personal/index/index.component';
import { RegisterUserComponent } from './dialogs/register-user/register-user.component';
import { LoginUserComponent } from './dialogs/login-user/login-user.component';
import { VerificationComponent } from './views/personal/verification/verification.component';
import { NotFoundComponent } from './views/personal/not-found/not-found.component';

/** Angular Material */
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterUserComponent,
    LoginUserComponent,
    VerificationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule

  ],
  providers: [DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
