import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {BehaviorSubject, from, Observable} from "rxjs";
import {map, take, tap} from "rxjs/operators";
import firebase from "firebase/compat";
import {Router} from "@angular/router";
import {LocalStorageEnum} from "../enums/local-storage.enum";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*** Data **/
  private user$ = new BehaviorSubject<any>(null);

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service,
    private router: Router
  ) {
  }

  public get email(): string {
    const email = JSON.parse(localStorage.getItem(LocalStorageEnum.USER_EMAIL) || '');
    if (email) {
      return (email as string).split('@')[0];
    }
    return email;
  }

  public isLogin$(): Observable<boolean> {
    return this.user$.asObservable().pipe(map(user => !!user)).pipe(tap((isAuth) => {

      // if (isAuth) {
      //   this.router.navigateByUrl('dashboard');
      // } else {
      //   this.router.navigateByUrl('login');
      // }
    }));
  }

  public signIn({email, password}: { email: string, password: string; }): Observable<any> {
    const request = this.afAuth.signInWithEmailAndPassword(email, password);
    return from(request).pipe(take(1), tap(user => {
      this.user$.next(user);
      this.router.navigateByUrl('dashboard');
    }));
  }

  public getTokenInfo(): Observable<firebase.auth.IdTokenResult | null> {
    return this.afAuth.idTokenResult;
  }

  public signOut(): Observable<any> {
    const request = this.afAuth.signOut();
    return from(request);
  }
}
