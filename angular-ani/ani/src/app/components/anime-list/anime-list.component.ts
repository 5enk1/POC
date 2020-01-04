import { Component, OnInit } from '@angular/core';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { Anime } from 'src/app/models/anime';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent {
  animeList: Observable<Anime[]>;
  constructor(private animeProvider: AnimeProviderService) {
    this.animeList = animeProvider.getSeries();
    this.animeList.subscribe(anime => console.log(anime));
  }
  displayedColumns: string[] = ['pictureurl', 'Name', 'Episode', 'Season'];
}
