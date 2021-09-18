import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {LoaderService} from "../../services/loader.service";
import {finalize, pluck, switchMap} from "rxjs/operators";
import {LocalStorageEnum} from "../../enums/local-storage.enum";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  /*** Controls **/
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    public loaderService: LoaderService
  ) {
    this.loginForm = this.fb.group({
      email: this.fb.control('kochutyura@gmail.com', [Validators.email]),
      password: this.fb.control('18Kochut')
    })
  }

  ngOnInit(): void {
  }

  login(): void {
    // this.loaderService.show();
    this.authService.signIn(this.loginForm.value)
      .pipe(
        switchMap(() => this.authService.getTokenInfo()),
        pluck('token'),
        finalize(() => this.loaderService.hide())
      )
      .subscribe(token => {
        localStorage.setItem(LocalStorageEnum.TOKEN, JSON.stringify(token));
        localStorage.setItem(LocalStorageEnum.USER_EMAIL, JSON.stringify(this.loginForm.get('email')?.value))
        // this.loaderService.hide();
      });
  }
}
