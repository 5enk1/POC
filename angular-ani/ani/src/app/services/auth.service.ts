import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase';
import { AnimeProviderService } from './anime-provider.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;
  constructor(public afa: AngularFireAuth, private afs: AngularFirestore) {
    this.user$ = this.afa.authState;
  }
  async login(userName, userPassword) {
    auth()
      .signInWithEmailAndPassword(userName, userPassword)
      .then(
        res => (this.user$ = this.afa.authState),
        err => console.error(err)
      );
  }

  async signOut() {
    auth()
      .signOut()
      .then(() => {
        this.user$ = undefined;
      })
      .catch(error => {
        console.error(error);
      });
  }

  async getUser() {
    return this.afa;
  }

  signUp(email, password) {
    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.user$ = this.afa.authState;
        this.afs
          .collection('user/' + user.user.uid + '/anime')
          .add({ init: 'awd' });
      })
      .catch(e => console.log(e));
  }
}
