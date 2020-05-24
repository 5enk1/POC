import { Component, OnInit, Inject } from '@angular/core';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNewAnimeComponent } from '../add-new-anime/add-new-anime.component';
import { Anime } from 'src/app/models/anime';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './anime-form.component.html',
  styleUrls: ['./anime-form.component.css'],
})
export class AnimeFormComponent implements OnInit {
  checked = this.data ? this.data.Complited : false;
  newAnimeForm = new FormGroup({
    AnimeName: new FormControl(
      this.data ? this.data.AnimeName : '',
      Validators.required
    ),
    Episode: new FormControl(this.data ? this.data.Episode : ''),
    Season: new FormControl(this.data ? this.data.Season : ''),
    Complited: new FormControl(false),
    PictureUrl: new FormControl(this.data ? this.data.PictureUrl : ''),
  });

  ngOnInit(): void {}
  constructor(
    public animeProvider: AnimeProviderService,
    public dialogRef: MatDialogRef<AddNewAnimeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Anime
  ) {}

  onSubmit() {
    const data = this.newAnimeForm.value as Anime;
    if (this.newAnimeForm.valid) {
      this.animeProvider.newAnime(data).then((res) => this.dialogRef.close());
    }
  }

  onEdit(anime: Anime) {
    const data = this.newAnimeForm.value as Anime;
    if (this.newAnimeForm.valid) {
      this.animeProvider
        .updateAnime(anime, data)
        .then((res) => this.dialogRef.close());
    }
  }
}
