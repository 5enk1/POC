import { Component, Input } from '@angular/core';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { Anime } from 'src/app/models/anime';

@Component({
  selector: 'app-increase-decrease',
  templateUrl: './increase-decrease.component.html',
  styleUrls: ['./increase-decrease.component.css']
})
export class IncreaseDecreaseComponent {
  @Input() public anime: Anime;
  @Input() public key: string;
  constructor(public animeProvider: AnimeProviderService) {}

  increaseDecrease(anime: Anime, changeValue, key) {
    let map = new Object();
    const value: number = anime[key];
    map[key] = value + changeValue;
    this.animeProvider.updateAnime(anime, map);
  }
}
