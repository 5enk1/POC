import { Injectable } from '@angular/core';
import {
  DocumentChangeAction,
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Anime } from '../models/anime';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AnimeProviderService {
  db: AngularFirestore;
  docId: any[];
  public complited: boolean;
  public listToShow$: BehaviorSubject<boolean>;
  snapShotChanges$: Observable<DocumentChangeAction<Anime>[]>;
  stringToQuery: string;
  fullList: AngularFirestoreCollection<unknown>;
  uid: any;

  constructor(db: AngularFirestore, public authService: AuthService) {
    this.listToShow$ = new BehaviorSubject(false);
    this.db = db;
    this.complited = false;
    authService.user$.subscribe(result => {
      if (result) {
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
      }
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
    return this.fullList.doc(anime.id).update(newValue);
  }

  removeField(anime: Anime, key: string) {
    const newMap = new Object();
    newMap[key] = firebase.firestore.FieldValue.delete();
    return this.updateAnime(anime, newMap);
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

  // copyAll(uid2) {
  //   let animeList: Anime[];

  //   this.db
  //     .collection<Anime>('user/' + 'MmSW0ZhLBtdf8Glkn7Xi5pcqhEO2' + '/anime')
  //     .snapshotChanges()
  //     .subscribe(anime => {
  //       animeList = anime.map(a => {
  //         const data = a.payload.doc.data();
  //         const id = a.payload.doc.id;
  //         return { id, ...data } as Anime;
  //       });
  //       animeList.forEach(awdawd => this.removeField(awdawd));
  //     });
  // }
}
