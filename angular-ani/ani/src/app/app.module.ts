import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  AnimeListComponent,
  DialogOpenComponent,
  AddImageComponent
} from "./anime/anime-list.component";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { ReactiveFormsModule } from "@angular/forms";
import { environment } from "../environments/environment";
import {
  AnimeAddNewComponent,
  AddNewSeriesComponent
} from "./anime/anime-list.component";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    DialogOpenComponent,
    AnimeListComponent,
    AnimeAddNewComponent,
    AddNewSeriesComponent,
    AddImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule
  ],
  entryComponents: [AnimeAddNewComponent, AddImageComponent],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
