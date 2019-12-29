import { Component, Inject, Input } from "@angular/core";
import {
  AngularFirestore,
  DocumentChangeAction
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { firestore } from "firebase";
import { FormGroup, FormControl } from "@angular/forms";
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogConfig,
  MatDialogRef
} from "@angular/material/dialog";

@Component({
  selector: "app-anime-list",
  templateUrl: "anime-list.component.html",
  styleUrls: ["anime-list.component.css"]
})
export class AnimeListComponent {
  title = "anime list";
  animeCollection: Observable<DocumentChangeAction<any>[]>;
  db: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.db = db;
    this.animeCollection = db.collection("anime").snapshotChanges();
  }

  deleteAnime(awd: any) {
    this.db
      .collection("anime")
      .doc(awd.payload.doc.id)
      .delete();
  }

  updateAnime(awd: any, awd2: any) {
    console.log(awd2);
    this.db
      .collection("anime")
      .doc(awd.payload.doc.id)
      .update(awd2);
  }

  episodeChange(anime: DocumentChangeAction<any>, awd) {
    if (anime.payload.doc.data().Episode + awd > 0) {
      this.updateAnime(anime, {
        Episode: anime.payload.doc.data().Episode + awd
      });
    }
  }

  seasonChange(anime: DocumentChangeAction<any>, awd) {
    if (anime.payload.doc.data().Season + awd > 0) {
      this.updateAnime(anime, {
        Season: anime.payload.doc.data().Season + awd
      });
    }
  }
}

@Component({
  selector: "app-anime-add-new",
  templateUrl: "anime-add-new.component.html"
})
export class AnimeAddNewComponent {
  db: any;
  constructor(
    db: AngularFirestore,
    public dialogRef: MatDialogRef<AddNewSeriesComponent>
  ) {
    this.db = db;
  }

  formawd = new FormGroup({
    AnimeName: new FormControl(""),
    Episode: new FormControl(""),
    Season: new FormControl(""),
    Date: new FormControl("")
  });

  onSubmit() {
    const data = this.formawd.value;
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection("anime")
        .add(data)
        .then(
          res => this.dialogRef.close(),
          err => reject(err)
        );
    });
  }
}

@Component({
  selector: "app-pop-up-add-new-series",
  templateUrl: "pop-up-component.html"
})
export class AddNewSeriesComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(AnimeAddNewComponent);
  }
}

@Component({
  selector: "app-pop-up-add-image",
  templateUrl: "pop-up-image-component.html"
})
export class DialogOpenComponent {
  @Input() anime: any;
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.anime;
    this.dialog.open(AddImageComponent, dialogConfig);
  }
}

@Component({
  selector: "app-anime-add-image",
  templateUrl: "anime-add-image.component.html"
})
export class AddImageComponent {
  db: any;
  constructor(
    db: AngularFirestore,
    @Inject(MAT_DIALOG_DATA) public data2,
    public dialogRef: MatDialogRef<DialogOpenComponent>
  ) {
    this.db = db;
  }

  formpicture = new FormGroup({
    pictureurl: new FormControl("")
  });

  onSubmit() {
    console.log(this.data2.description);
    const data = this.formpicture.value;
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection("anime")
        .doc(this.data2.payload.doc.id)
        .update(data)
        .then(
          res => this.dialogRef.close(),
          err => reject(err)
        );
    });
  }
}
