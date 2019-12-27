import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormControl, FormGroup } from "@angular/forms";


@Component({
  selector: "app-anime-add-new",
  templateUrl: "anime-add-new.component.html"
})
export class AnimeAddNewComponent {
  db: any;
  constructor(db: AngularFirestore) {
    this.db = db;
  }

  formawd = new FormGroup({
    AnimeName: new FormControl(""),
    Episode: new FormControl(""),
    Season: new FormControl(""),
    Date: new FormControl("")
  });

  onSubmit() {
    let data = this.formawd.value
    return new Promise<any>((resolve, reject) =>{
        this.db
            .collection("anime")
            .add(data)
            .then(res => {}, err => reject(err));
    });
}
}
