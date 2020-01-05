import { Component } from '@angular/core';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { Anime } from 'src/app/models/anime';
import { auth } from 'firebase';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {
  animeList: Anime[];

  constructor(private animeProvider: AnimeProviderService) {
    animeProvider.getSeries().subscribe(
      anime =>
        (this.animeList = anime.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data } as Anime;
        }))
    );
  }

  displayedColumns: string[] = [
    'pictureurl',
    'Name',
    'Episode',
    'Season',
    'Functions'
  ];
}
