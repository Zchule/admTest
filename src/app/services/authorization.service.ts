import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthorizacionService {

  constructor(
    private authFire: AngularFireAuth,
    private router: Router
  ) {
    this.isLogged();
  }

  public login(email: string, password: string) {
    console.log('login');
    this.authFire.auth.signInWithEmailAndPassword(email, password)
    .then((response) => {
      this.router.navigate([`home`]);
    }).catch((error) => {
      alert('error');
      console.log(error);
      this.router.navigate([`login`]);
    });
  }

  public isLogged() {
    return this.authFire.authState;
  }
  public logout() {
    this.authFire.auth.signOut();
    alert('sesion cerrada');
  }

  public getUser() {
    return this.authFire.auth;
  }
}
