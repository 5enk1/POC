import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: "app-anime-list",
  templateUrl: "anime-list.component.html"
})
export class AnimeListComponent {
  title: string = "anime list";
  animes: Observable<any[]>;
  animesss: any[] ;

  constructor(db: AngularFirestore) {
     this.animes = db.collection('anime').valueChanges()
     this.animes.subscribe(awd => this.animesss = awd)
     console.log(this.animes)
  }
}
