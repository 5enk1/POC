import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, SubmitUser } from './app.component';
import {
  AnimeListComponent,
  DialogOpenComponent,
  AddImageComponent
} from './anime/anime-list.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import {
  AnimeAddNewComponent,
  AddNewSeriesComponent
} from './anime/anime-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from 'ngx-clipboard';
import {
  MatInputModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatFormFieldModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DialogOpenComponent,
    AnimeListComponent,
    AnimeAddNewComponent,
    AddNewSeriesComponent,
    AddImageComponent,
    SubmitUser
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatMenuModule
  ],
  entryComponents: [AnimeAddNewComponent, AddImageComponent, SubmitUser],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
