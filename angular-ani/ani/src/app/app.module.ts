import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from 'ngx-clipboard';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material.module';
import { FirebaseModule } from './shared/modules/firebase.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ClipboardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FirebaseModule,
    MaterialModule
  ],
  entryComponents: [],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
