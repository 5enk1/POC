import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef
} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { Anime } from 'src/app/models/anime';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-new-anime',
  templateUrl: './add-new-anime.component.html',
  styleUrls: ['./add-new-anime.component.css']
})
export class AddNewAnimeComponent {
  constructor(
    public dialog: MatDialog,
    public animeProvider: AnimeProviderService
  ) {}
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(AnimeAddNewComponent, dialogConfig);
  }
}

@Component({
  selector: 'app-anime-add-new',
  templateUrl: './anime-add-new.component.html',
  styleUrls: ['./anime-add-new.component.css']
})
export class AnimeAddNewComponent {
  constructor(
    public animeProvider: AnimeProviderService,
    public dialogRef: MatDialogRef<AddNewAnimeComponent>
  ) {}
  checked = false;
  formawd = new FormGroup({
    AnimeName: new FormControl('', Validators.required),
    Episode: new FormControl(''),
    Season: new FormControl(''),
    Date: new FormControl(''),
    Complited: new FormControl('')
  });

  onSubmit() {
    const data = this.formawd.value as Anime;
    if (this.formawd.valid) {
      this.animeProvider.newAnime(data).then(res => this.dialogRef.close());
    }
  }
}
