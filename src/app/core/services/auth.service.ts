import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {from, Observable} from "rxjs";
import {take} from "rxjs/operators";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*** Controls **/

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) {
  }

  public signIn(email: string, password: string): Observable<any> {
    const request = this.afAuth.signInWithEmailAndPassword(email, password);
    return from(request).pipe(take(1));
  }

  public getTokenInfo(): Observable<firebase.auth.IdTokenResult | null> {
    return this.afAuth.idTokenResult;
  }

  public signOut(): Observable<any> {
    const request = this.afAuth.signOut();
    return from(request);
  }
}
