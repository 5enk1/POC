import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afa.authState;
  }
  async login(userName, userPassword) {
    auth()
      .signInWithEmailAndPassword(userName, userPassword)
      .then(
        res => console.log(userName + ' loged in'),
        err => console.error(err)
      );
  }
  async signOut() {
    auth()
      .signOut()
      .then(() => {})
      .catch(error => {
        console.error(error);
      });
  }
}
