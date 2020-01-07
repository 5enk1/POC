import { Component, Input } from '@angular/core';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { Anime } from 'src/app/models/anime';

@Component({
  selector: 'app-move-to-other-list',
  templateUrl: './move-to-other-list.component.html',
  styleUrls: ['./move-to-other-list.component.css']
})
export class MoveToOtherListComponent {
  @Input() public anime: Anime;
  constructor(public animeProvider: AnimeProviderService) {}

  moveToOtherList(anime: Anime, key) {
    const newMap = new Object();
    newMap[key] = !this.anime.Complited;
    this.animeProvider.updateAnime(anime, newMap);
  }
}
