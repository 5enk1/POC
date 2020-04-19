import {
  FirestoreSettingsToken,
  AngularFirestoreModule,
} from '@angular/fire/firestore';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  exports: [AngularFireModule, AngularFirestoreModule],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
})
export class FirebaseModule {}
