import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
  constructor(
    private authFire: AngularFireAuth,
    private afDB: AngularFireDatabase,
    private router: Router
  ) {
  }
  public createUser(email: string, password: string, name: string, cedula: string, type: string) {
    console.log('registro');
    this.authFire.auth.createUserWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response.user.uid);
      this.createUserData(response.user.uid, name, cedula, email, type);
      this.router.navigate([`list`]);
    }).catch((error) => {
      alert('error');
      console.log(error);
      this.router.navigate([`form-user`]);
    });
  }

  public createUserData(id: string, name: string, cedula: string, email: string, type: string) {
    this.afDB
       .object('/userProfiles/' + id)
       .set({
         email: email,
         type: type,
         cedula: cedula,
         name: name
      });
  }

  public editUser(user) {
    return this.afDB.object('userProfiles/' + user.id);
  }

  public deleteUser(user) {
    return this.afDB.object('userProfiles/' + user.id).remove();
  }

  public getUser(user) {
    return this.afDB.object('item').valueChanges();
  }

  public getUsers() {
    return this.afDB.list('userProfiles/').snapshotChanges();
  }
}
