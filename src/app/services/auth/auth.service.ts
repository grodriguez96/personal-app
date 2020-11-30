import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app"
type User = firebase.User

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(public afAuth: AngularFireAuth) { }

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result
    } catch (err) {
      console.log(err)
    }
  }

  async login(email: string, password: string) {
    try {
      var result: firebase.auth.UserCredential;
      await this.afAuth.setPersistence('none')
        .then(async () => { result = await this.afAuth.signInWithEmailAndPassword(email, password) })
      return result
    } catch (err) {
      console.log(err)
    }
  }

  async sendEmail() {
    try {
      (await this.afAuth.currentUser).sendEmailVerification();
    } catch (err) {
      console.log(err)
    }

  }
}
