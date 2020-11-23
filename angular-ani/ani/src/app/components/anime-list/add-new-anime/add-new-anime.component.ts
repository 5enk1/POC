import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { Anime } from 'src/app/models/anime';
import { AnimeFormComponent } from '../../forms/anime-form/anime-form.component';

@Component({
  selector: 'app-add-new-anime',
  templateUrl: './add-new-anime.component.html',
  styleUrls: ['./add-new-anime.component.css'],
})
export class AddNewAnimeComponent implements OnInit {
  @Input() anime: Anime;
  ngOnInit(): void {}
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
  styleUrls: ['./edit-anime.component.css'],
})
export class EditAnimeComponent implements OnInit {
  @Input() anime: Anime;
  ngOnInit(): void {}
  constructor(
    public dialog: MatDialog,
    public animeProvider: AnimeProviderService
  ) {}
  openDialog() {
    this.dialog.open(AnimeFormComponent, { data: this.anime });
  }
}
