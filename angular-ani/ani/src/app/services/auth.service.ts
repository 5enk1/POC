import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import  firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User>;
  email: any;
  constructor(public afa: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.afa.authState;
    this.user$.subscribe((e) => {
      if (e) {
        this.email = e.email;
      } else {
        this.email = undefined;
      }
    });
  }
  async login(userName, userPassword) {
    firebase.auth()
      .signInWithEmailAndPassword(userName, userPassword)
      .then(
        (res) => (this.user$ = this.afa.authState),
        (err) => console.error(err)
      );
  }

  async signOut() {
    firebase.auth()
      .signOut()
      .then(() => {
        this.user$ = undefined;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async getUser() {
    return this.afa;
  }

  signUp(email, password) {
    return firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.user$ = this.afa.authState;
        this.afs
          .collection('user/' + user.user.uid + '/anime')
          .add({ init: 'awd' });
      })
      .catch((e) => console.log(e));
  }
}
