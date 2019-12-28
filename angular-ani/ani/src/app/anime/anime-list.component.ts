import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-anime-list",
  templateUrl: "anime-list.component.html"
})
export class AnimeListComponent {
  title = "anime list";
  tests: Observable<any[]>;
  tests2: any;
  db: any;

  constructor(db: AngularFirestore) {
    this.db = db;
    this.tests = db.collection("anime").valueChanges();
    this.tests2 = db.collection("anime").snapshotChanges();
  }

  deleteAnime(awd: any) {
    console.log(awd.payload.doc.id);
    this.db.collection('anime').doc(awd.payload.doc.id).delete();
  }
}
