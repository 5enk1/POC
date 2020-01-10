import { Component, OnInit, Inject, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { Anime } from 'src/app/models/anime';

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
    this.dialog.open(AnimeAddNewComponent, this.anime);
  }
}

@Component({
  templateUrl: './anime-add-new.component.html',
  styleUrls: ['./anime-add-new.component.css']
})
export class AnimeAddNewComponent {
  constructor(
    public animeProvider: AnimeProviderService,
    public dialogRef: MatDialogRef<AddNewAnimeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Anime
  ) {}

  checked = false;
  newAnimeForm = new FormGroup({
    AnimeName: new FormControl(
      this.data ? this.data.AnimeName : '',
      Validators.required
    ),
    Episode: new FormControl(this.data ? this.data.Episode : ''),
    Season: new FormControl(this.data ? this.data.Season : ''),
    Date: new FormControl(this.data ? this.data.Date : ''),
    Complited: new FormControl(this.data ? true : false),
    PictureUrl: new FormControl(this.data ? this.data.PictureUrl : '')
  });

  onSubmit() {
    const data = this.newAnimeForm.value as Anime;
    if (this.newAnimeForm.valid) {
      this.animeProvider.newAnime(data).then(res => this.dialogRef.close());
    }
  }

  onEdit(anime: Anime) {
    const data = this.newAnimeForm.value as Anime;
    if (this.newAnimeForm.valid) {
      this.animeProvider
        .updateAnime(anime, data)
        .then(res => this.dialogRef.close());
    }
  }
}

@Component({
  selector: 'app-edit-new-anime',
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
    console.log(this.anime);
    this.dialog.open(AnimeAddNewComponent, { data: this.anime });
  }
}
