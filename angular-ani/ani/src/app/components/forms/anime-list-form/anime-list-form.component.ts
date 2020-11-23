import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import { AddNewListComponent } from '../../anime-list/add-new-list/add-new-list.component';

@Component({
  selector: 'app-anime-list-form',
  templateUrl: './anime-list-form.component.html',
  styleUrls: ['./anime-list-form.component.css'],
})
export class AnimeListFormComponent implements OnInit {
  // TODO Rename
  newAnimeForm = new FormGroup({
    Episode: new FormControl(), // TODO Rename
  });

  ngOnInit(): void {}
  constructor(
    public animeProvider: AnimeProviderService,
    public dialogRef: MatDialogRef<AddNewListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onSubmit() {
    const data = this.newAnimeForm.value;
    if (this.newAnimeForm.valid) {
      this.animeProvider.addList(data.Episode);
      this.dialogRef.close();
    }
  }
}
