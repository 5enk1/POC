import { Injectable, Component } from '@angular/core';
import {
  DocumentChangeAction,
  AngularFirestore
} from '@angular/fire/firestore';
import { Anime } from '../models/anime';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnimeProviderService {
  db: AngularFirestore;
  authService: AuthService;
  uuid: firebase.User;
  docId: any[];
  public complited: boolean;
  public test111$: BehaviorSubject<any>;
  snapShotChanges$: any;
  constructor(db: AngularFirestore, authService: AuthService) {
    this.db = db;
    this.complited = false;
    this.authService = authService;
    this.authService.user$.subscribe(result => {
      this.uuid = result;
      this.snapShotChanges$ = this.test111$.pipe(
        switchMap(test111 =>
          this.db
            .collection<Anime>('user/' + result.uid + '/anime/', ref =>
              ref.where('Complited', '==', test111)
            )
            .snapshotChanges()
        )
      );
    });

    this.test111$ = new BehaviorSubject(false);
  }

  changeBetweenList() {
    this.complited = !this.complited;
    this.test111$.next(this.complited);
  }

  getSeries(): Observable<DocumentChangeAction<any>[]> {
    return this.snapShotChanges$;
  }

  updateAnime(anime: Anime, awd2: any) {
    this.db
      .collection('user/' + this.uuid.uid + '/anime/')
      .doc(anime.id)
      .update(awd2);
  }

  deleteAnime(anime: Anime) {
    this.db
      .collection('user/' + this.uuid.uid + '/anime/')
      .doc(anime.id)
      .delete();
  }

  newAnime(anime: any) {
    return this.db.collection('user/' + this.uuid.uid + '/anime/').add(anime);
  }
}
