import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-anime-list',
  templateUrl: 'anime-list.component.html'
})
export class AnimeListComponent {
  title = 'anime list';
  animes: any[];

  constructor(db: AngularFirestore) {
    db.collection('anime')
      .valueChanges()
      .subscribe(anime => (this.animes = anime));
  }
}
