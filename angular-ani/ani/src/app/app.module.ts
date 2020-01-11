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
  SignUpComponent
} from './components/header/sign-up-out-in/sign-in.component';
import { IncreaseDecreaseComponent } from './components/anime-list/increase-decrease/increase-decrease.component';
import { RemoveFromListComponent } from './components/anime-list/remove-from-list/remove-from-list.component';
import {
  AddNewAnimeComponent,
  EditAnimeComponent
} from './components/anime-list/add-new-anime/add-new-anime.component';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material/core';
import { SliderForListComponent } from './components/header/slider-for-list/slider-for-list.component';
import { MoveToOtherListComponent } from './components/anime-list/move-to-other-list/move-to-other-list.component';
import { AnimeFormComponent } from './components/anime-list/anime-form/anime-form.component';
import { SignInFormComponent } from './components/header/sign-up-out-in/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/header/sign-up-out-in/sign-up-form/sign-up-form.component';

firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    HeaderComponent,
    SignInComponent,
    IncreaseDecreaseComponent,
    RemoveFromListComponent,
    AddNewAnimeComponent,
    SliderForListComponent,
    MoveToOtherListComponent,
    SignUpComponent,
    EditAnimeComponent,
    AnimeFormComponent,
    SignInFormComponent,
    SignUpFormComponent
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
  entryComponents: [
    AnimeFormComponent,
    SignInFormComponent,
    SignUpFormComponent
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
