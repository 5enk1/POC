import {
  FirestoreSettingsToken,
  AngularFirestoreModule
} from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'ani'),
    AngularFirestoreModule
  ],
  exports: [AngularFireModule, AngularFirestoreModule],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }]
})
export class FirebaseModule {}
