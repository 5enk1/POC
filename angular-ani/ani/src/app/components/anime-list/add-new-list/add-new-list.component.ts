import { Component, OnInit, Inject } from '@angular/core';
import { AnimeProviderService } from 'src/app/services/anime-provider.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    this.dialog.open(AddNewListFormComponent);
  }
}

@Component({
  templateUrl: './add-new-list-form.component.html',
  styleUrls: ['./add-new-list-form.component.css'],
})
export class AddNewListFormComponent implements OnInit {
  newListForm = new FormGroup({
    NewListName: new FormControl(),
  });

  ngOnInit(): void {}
  constructor(
    public animeProvider: AnimeProviderService,
    public dialogRef: MatDialogRef<AddNewListFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String
  ) {}

  onSubmit() {
    const data = this.newListForm.value;
    if (this.newListForm.valid) {
      this.animeProvider.newAnime(data).then((res) => this.dialogRef.close());
    }
  }

  onEdit() {}
}
