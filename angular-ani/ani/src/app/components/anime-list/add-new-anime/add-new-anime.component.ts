import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { Anime } from 'src/app/models/anime';
import { AnimeFormComponent } from '../anime-form/anime-form.component';

@Component({
  selector: 'app-add-new-anime',
  templateUrl: './add-new-anime.component.html',
  styleUrls: ['./add-new-anime.component.css']
})
export class AddNewAnimeComponent {
  @Input() anime: Anime;
  constructor(
    public dialog: MatDialog,
    public animeProvider: AnimeProviderService
  ) {}
  openDialog() {
    this.dialog.open(AnimeFormComponent, this.anime);
  }
}

@Component({
  selector: 'app-edit-anime',
  templateUrl: './edit-anime.component.html',
  styleUrls: ['./edit-anime.component.css']
})
export class EditAnimeComponent {
  @Input() anime: Anime;
  constructor(
    public dialog: MatDialog,
    public animeProvider: AnimeProviderService
  ) {}
  openDialog() {
    this.dialog.open(AnimeFormComponent, { data: this.anime });
  }
}
