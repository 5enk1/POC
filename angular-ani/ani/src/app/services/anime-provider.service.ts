import { Injectable } from '@angular/core';
import {
  DocumentChangeAction,
  AngularFirestore,
  AngularFirestoreCollection,
  SnapshotOptions,
} from '@angular/fire/firestore';
import { Anime } from '../models/anime';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';
import { ListWithId } from '../models/list-with-id';

@Injectable({
  providedIn: 'root',
})
export class AnimeProviderService {
  db: AngularFirestore;
  docId: any[];
  public complited: string | boolean;
  public listToShow$: BehaviorSubject<string | boolean>;
  snapShotChanges$: Observable<DocumentChangeAction<Anime>[]>;
  fullList: AngularFirestoreCollection<unknown>;
  uid: any;
  public animeList: Anime[];
  fullListOfList: any;
  listOfListNames: SnapshotOptions;

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
          .subscribe((e) => {
            this.listOfListNames = e.payload.data()['collections'];
          });
        this.fullListOfList = this.db.collection('user').doc(result.uid);
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

  addList(listName: any) {
    this.fullListOfList.update({
      collections: firebase.firestore.FieldValue.arrayUnion(listName),
    });
  }
}
