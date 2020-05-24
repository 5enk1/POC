import { Component, OnInit, Input } from '@angular/core';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { Anime } from 'src/app/models/anime';

@Component({
  selector: 'app-move-to-list',
  templateUrl: './move-to-list.component.html',
  styleUrls: ['./move-to-list.component.css'],
})
export class MoveToListComponent implements OnInit {
  @Input() listNames: any;
  @Input() public anime: Anime;
  constructor(private animeProvider: AnimeProviderService) {}

  ngOnInit() {}
  moveToOtherList(anime: Anime, key, nameOfTheList) {
    const newMap = new Object();
    newMap[key] = nameOfTheList;
    this.animeProvider.updateAnime(anime, newMap);
  }
}
