import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  async register(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result
    } catch (err) {
      if (err.code === "auth/email-already-in-use") alert("El correo ya esta en uso")
      else alert(err.message)
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
      if (err.code === "auth/user-not-found") alert("No se encontro ningun usuario con ese correo")
      if (err.code === "auth/wrong-password") alert("La contraseña es incorrecta")
      else alert(err.message)
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
