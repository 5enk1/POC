import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from 'ngx-clipboard';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material.module';
import { FirebaseModule } from './shared/modules/firebase.module';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { HeaderComponent } from './components/header/header.component';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase';
import {
  SignInComponent,
  SubmitUserComponent
} from './components/header/sign-in/sign-in.component';
import { IncreaseDecreaseComponent } from './components/anime-list/increase-decrease/increase-decrease.component';
import { RemoveFromListComponent } from './components/anime-list/remove-from-list/remove-from-list.component';
import {
  AddNewAnimeComponent,
  AnimeAddNewComponent
} from './components/anime-list/add-new-anime/add-new-anime.component';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material/core';
import { SliderForListComponent } from './components/header/slider-for-list/slider-for-list.component';
import { MoveToOtherListComponent } from './components/anime-list/move-to-other-list/move-to-other-list.component';

firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    HeaderComponent,
    SignInComponent,
    SubmitUserComponent,
    IncreaseDecreaseComponent,
    RemoveFromListComponent,
    AddNewAnimeComponent,
    AnimeAddNewComponent,
    SliderForListComponent,
    MoveToOtherListComponent
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FirebaseModule,
    MaterialModule
  ],
  entryComponents: [SubmitUserComponent, AnimeAddNewComponent],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
