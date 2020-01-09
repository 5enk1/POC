import { Injectable, Component } from '@angular/core';
import {
  DocumentChangeAction,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Anime } from '../models/anime';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AnimeProviderService {
  db: AngularFirestore;
  authService: AuthService;
  docId: any[];
  public complited: boolean;
  public listToShow$: BehaviorSubject<boolean>;
  snapShotChanges$: Observable<DocumentChangeAction<Anime>[]>;
  stringToQuery: string;
  fullList: AngularFirestoreCollection<unknown>;
  uid: any;

  constructor(db: AngularFirestore, authService: AuthService) {
    this.listToShow$ = new BehaviorSubject(false);
    this.db = db;
    this.complited = false;
    this.authService = authService;
    this.authService.user$.subscribe(result => {
      this.uid = result;
      this.stringToQuery = 'user/' + result.uid + '/anime/';
      this.fullList = this.db.collection(this.stringToQuery);
      this.snapShotChanges$ = this.listToShow$.pipe(
        switchMap(listToShow =>
          this.db
            .collection<Anime>(this.stringToQuery, ref =>
              ref.where('Complited', '==', listToShow)
            )
            .snapshotChanges()
        )
      );
    });
  }

  changeBetweenList() {
    this.complited = !this.complited;
    this.listToShow$.next(this.complited);
  }

  getSeries(): Observable<DocumentChangeAction<any>[]> {
    return this.snapShotChanges$;
  }

  updateAnime(anime: Anime, newValue: any) {
    this.fullList.doc(anime.id).update(newValue);
  }

  deleteAnime(anime: Anime) {
    this.fullList.doc(anime.id).delete();
  }

  newAnime(anime: any) {
    return this.fullList.add(anime);
  }

  createRootForUser(user: firebase.User) {
    this.db.collection('user/' + user.uid + '/anime').add({ init: 'awd' });
  }

  // copyAll(uid1,uid2) { copy from one uid to an other if you fuck up
  //   let awd: Observable<Anime[]> = this.db
  //     .collection<Anime>('user/' + uid1 + '/anime')
  //     .valueChanges();
  //   awd.subscribe(e =>
  //     e.forEach(awdawd => {
  //       this.db
  //         .collection<Anime>(
  //           'user/' + uid2 + '/anime'
  //         )
  //         .add(awdawd);
  //     })
  //   );
  // }
}
