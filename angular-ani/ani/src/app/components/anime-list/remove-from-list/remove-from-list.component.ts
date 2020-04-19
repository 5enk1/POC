import { Component, OnInit, Input } from '@angular/core';
import { Anime } from 'src/app/models/anime';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';

@Component({
  selector: 'app-remove-from-list',
  templateUrl: './remove-from-list.component.html',
  styleUrls: ['./remove-from-list.component.css'],
})
export class RemoveFromListComponent {
  @Input() public anime: Anime;
  constructor(public animeProvider: AnimeProviderService) {}

  deleteFromList() {
    this.animeProvider.deleteAnime(this.anime);
  }
}
