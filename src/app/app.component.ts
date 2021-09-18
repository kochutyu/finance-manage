import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {HttpService} from "./core/services/http.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthService} from "./core/services/auth.service";
import {TranslateService} from "@ngx-translate/core";
import {environment} from "../environments/environment";
import {LoaderService} from "./core/services/loader.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  languages = environment.languages;
  isShow = true;

  constructor(
    public loaderService: LoaderService,
    private httpService: HttpService,
    private angularFireAuth: AngularFireAuth,
    public authService: AuthService,
    public translateService: TranslateService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.loaderService.detect$().subscribe(isShow => {
      this.isShow = isShow;
      this.cdr.markForCheck();
    });
    this.router.navigateByUrl('/dashboard');
  }

  signIn() {
    this.authService.signIn({email: 'kochutyura@gmail.com', password: '18Kochut'}).subscribe(res => {
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

  ngOnDestroy() {
    localStorage.clear();
  }
}
