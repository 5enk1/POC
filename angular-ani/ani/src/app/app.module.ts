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
import * as firebase from 'firebase/compat/app';
import {
  SignInComponent,
  SignUpComponent,
} from './components/header/sign-up-out-in/sign-in.component';
import { IncreaseDecreaseComponent } from './components/anime-list/increase-decrease/increase-decrease.component';
import { RemoveFromListComponent } from './components/anime-list/remove-from-list/remove-from-list.component';
import {
  AddNewAnimeComponent,
  EditAnimeComponent,
} from './components/anime-list/add-new-anime/add-new-anime.component';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { AnimeFormComponent } from './components/forms/anime-form/anime-form.component';
import { SignInFormComponent } from './components/header/sign-up-out-in/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/header/sign-up-out-in/sign-up-form/sign-up-form.component';
import { MoveToListComponent } from './components/anime-list/move-to-list/move-to-list.component';
import { AddNewListComponent } from './components/anime-list/add-new-list/add-new-list.component';
import { AnimeListFormComponent } from './components/forms/anime-list-form/anime-list-form.component';

firebase.default.initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    HeaderComponent,
    SignInComponent,
    IncreaseDecreaseComponent,
    RemoveFromListComponent,
    AddNewAnimeComponent,
    SignUpComponent,
    EditAnimeComponent,
    AnimeFormComponent,
    SignInFormComponent,
    SignUpFormComponent,
    MoveToListComponent,
    AddNewListComponent,
    AnimeListFormComponent,
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FirebaseModule,
    MaterialModule,
  ],
  entryComponents: [
    AnimeFormComponent,
    AnimeListFormComponent,
    SignInFormComponent,
    SignUpFormComponent,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
