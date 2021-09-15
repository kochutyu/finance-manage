import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HttpService} from "./core/services/http.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthService} from "./core/services/auth.service";
import {TranslateService} from "@ngx-translate/core";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  languages = environment.languages;

  constructor(
    private httpService: HttpService,
    private angularFireAuth: AngularFireAuth,
    private authService: AuthService,
    public translateService: TranslateService
  ) {
    // this.httpService.add('user/data', {ad: 'a123'}).subscribe(res => {
    //
    //   console.log(res)
    // });
    // this.angularFireAuth.signInWithEmailAndPassword('kochutyura@gmail.com', '18Kochut').then(m => {
    //   console.log(m)
    // })
    // this.GoogleAuth().then(res => {
    //   console.log(res)
    // })
    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, 'kochutyura@gmail.com', '18Kochut')
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     // ..
    //   });
  }

  // GoogleAuth() {
  //   return this.socialLogin(new auth.GoogleAuthProvider());
  // }
  //
  // // Auth logic to run auth providers
  // socialLogin(provider: auth.AuthProvider) {
  //   return this.angularFireAuth.signInWithPopup(provider)
  //     .then((result) => {
  //       console.log('You have been successfully logged in!')
  //     }).catch((error) => {
  //       console.log(error)
  //     })
  // }

  signIn() {
    this.authService.signIn('kochutyura@gmail.com', '18Kochut').subscribe(res => {
      console.log(res)
    });
  }

  getToken() {
    this.authService.getTokenInfo().subscribe(res => {
      console.log(res)
    })
  }

  logOut() {
    this.angularFireAuth.signOut().then(res => {
      console.log(res)
    });
  }
}
