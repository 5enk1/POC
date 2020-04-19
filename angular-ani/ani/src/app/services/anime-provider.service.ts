import { Injectable } from '@angular/core';
import {
  DocumentChangeAction,
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Anime } from '../models/anime';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AnimeProviderService {
  db: AngularFirestore;
  docId: any[];
  public complited: string | boolean;
  public listToShow$: BehaviorSubject<string | boolean>;
  snapShotChanges$: Observable<DocumentChangeAction<Anime>[]>;
  stringToQuery: string;
  fullList: AngularFirestoreCollection<unknown>;
  uid: any;
  public listOfListName$: Observable<any>;
  public animeList: Anime[];

  constructor(db: AngularFirestore, private authService: AuthService) {
    this.listToShow$ = new BehaviorSubject(false);
    this.db = db;
    this.complited = false;

    this.authService.user$.subscribe((result) => {
      if (result) {
        this.db
          .collection('user')
          .doc(result.uid)
          .snapshotChanges()
          .subscribe(
            (e) => (this.listOfListName$ = e.payload.data()['collections'])
          );
        this.stringToQuery = 'user/' + result.uid + '/anime/';
        this.fullList = this.db
          .collection('user')
          .doc(result.uid)
          .collection<Anime>('anime');
        this.listToShow$
          .pipe(
            switchMap((listToShow) =>
              this.db
                .collection('user')
                .doc(result.uid)
                .collection<Anime>('anime', (ref) =>
                  ref.where('Complited', '==', listToShow)
                )
                .snapshotChanges()
            )
          )
          .subscribe((anime) => {
            this.animeList = anime.map((a) => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data } as Anime;
            });
          });
      }
    });
  }

  changeBetweenList(nameOfTheList: string | boolean) {
    this.listToShow$.next(nameOfTheList);
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
}
