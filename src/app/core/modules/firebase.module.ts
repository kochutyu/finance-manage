import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireFunctionsModule} from "@angular/fire/compat/functions";
import {AngularFireMessagingModule} from "@angular/fire/compat/messaging";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";

const FIREBASE = [
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireStorageModule,
  AngularFireFunctionsModule,
  AngularFireMessagingModule,
  AngularFireDatabaseModule,
]

@NgModule({
  imports: [
    CommonModule,
    ...FIREBASE
  ],
  exports: [
    ...FIREBASE
  ]
})
export class FirebaseModule {
}
