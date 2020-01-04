import { Injectable } from '@angular/core';
import {
  DocumentChangeAction,
  AngularFirestore
} from '@angular/fire/firestore';
import { Anime } from '../models/anime';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeProviderService {
  db: AngularFirestore;
  constructor(db: AngularFirestore) {
    this.db = db;
  }

  getSeries(): Observable<Anime[]> {
    return this.db.collection<Anime>('anime').valueChanges();
  }
}
