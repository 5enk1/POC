import { Component, OnInit } from '@angular/core';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { Anime } from 'src/app/models/anime';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css'],
  providers: [AnimeProviderService],
})
export class AnimeListComponent implements OnInit {
  constructor(private animeProvider: AnimeProviderService) {}

  displayedColumns: string[] = [
    'pictureurl',
    'Name',
    'Episode',
    'Season',
    'Functions',
  ];

  ngOnInit(): void {}

  trackById(index, anime: Anime) {
    return anime.AnimeName;
  }
}
