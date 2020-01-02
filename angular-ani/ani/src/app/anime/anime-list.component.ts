import { Component, Inject, Input } from "@angular/core";
import {
  AngularFirestore,
  DocumentChangeAction
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
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
  title = "Anime list";
  animeCollection: Observable<DocumentChangeAction<any>[]>;
  animeCollectionComplited: Observable<DocumentChangeAction<any>[]>;
  db: AngularFirestore;
  formGroupa: FormGroup;

  constructor(db: AngularFirestore, formBuilder: FormBuilder) {
    this.formGroupa = formBuilder.group({ complited: false });
    this.db = db;
    this.animeCollection = db.collection("anime").snapshotChanges();
    this.animeCollectionComplited = db
      .collection("anime-complited")
      .snapshotChanges();
  }

  deleteAnime(awd: DocumentChangeAction<any>, collection: any) {
    this.db
      .collection(collection)
      .doc(awd.payload.doc.id)
      .delete();
  }

  moveToOther(anime: DocumentChangeAction<any>, nameOfCollection: string) {
    this.db.collection(nameOfCollection).add(anime.payload.doc.data());
    if ((nameOfCollection = "anime")) {
      this.deleteAnime(anime, "anime-complited");
    }
    if ((nameOfCollection = "anime-complited")) {
      this.deleteAnime(anime, "anime");
    }
  }

  updateAnime(
    anime: DocumentChangeAction<any>,
    awd2: any,
    nameOfCollection: string
  ) {
    console.log(awd2);
    this.db
      .collection(nameOfCollection)
      .doc(anime.payload.doc.id)
      .update(awd2);
  }

  episodeChange(
    anime: DocumentChangeAction<any>,
    awd,
    nameOfCollection: string
  ) {
    if (anime.payload.doc.data().Episode + awd > 0) {
      this.updateAnime(
        anime,
        {
          Episode: anime.payload.doc.data().Episode + awd
        },
        nameOfCollection
      );
    }
  }

  seasonChange(
    anime: DocumentChangeAction<any>,
    awd,
    nameOfCollection: string
  ) {
    if (anime.payload.doc.data().Season + awd > 0) {
      this.updateAnime(
        anime,
        {
          Season: anime.payload.doc.data().Season + awd
        },
        nameOfCollection
      );
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
    public dialogRef: MatDialogRef<AddNewSeriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data2
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
        .collection(this.data2)
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
  @Input() public stringa: string;
  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.stringa;
    this.dialog.open(AnimeAddNewComponent, dialogConfig);
  }
}

@Component({
  selector: "app-pop-up-add-image",
  templateUrl: "pop-up-image-component.html"
})
export class DialogOpenComponent {
  @Input() collection: string;
  @Input() anime: any;
  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { anime: this.anime, collection: this.collection };
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
    console.log(this.data2.collection);
    const data = this.formpicture.value;
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection(this.data2.collection)
        .doc(this.data2.payload.doc.id)
        .update(data)
        .then(
          res => this.dialogRef.close(),
          err => reject(err)
        );
    });
  }
}
