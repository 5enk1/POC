import { Component, OnInit, Inject } from '@angular/core';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { AnimeListFormComponent } from '../../forms/anime-list-form/anime-list-form.component';

@Component({
  selector: 'app-add-new-list',
  templateUrl: './add-new-list.component.html',
  styleUrls: ['./add-new-list.component.css'],
})
export class AddNewListComponent {
  constructor(
    public dialog: MatDialog,
    public animeProvider: AnimeProviderService
  ) {}
  openDialog() {
    this.dialog.open(AnimeListFormComponent);
  }
}
