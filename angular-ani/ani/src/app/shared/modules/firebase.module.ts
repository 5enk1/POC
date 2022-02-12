import {
  SETTINGS,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  exports: [AngularFireModule, AngularFirestoreModule],
  providers: [{ provide: SETTINGS, useValue: {} }],
})
export class FirebaseModule {}
