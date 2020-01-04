import { Injectable } from '@angular/core';
import {
  DocumentChangeAction,
  AngularFirestore
} from '@angular/fire/firestore';
import { Anime } from '../models/anime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeProviderService {
  db: AngularFirestore;
  constructor(db: AngularFirestore) {
    this.db = db;
  }

  getSeries(): Observable<DocumentChangeAction<Anime>[]> {
    return this.db.collection<Anime>('anime').snapshotChanges();
  }
}
