import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {AngularFireModule} from "@angular/fire/compat";

import {environment} from "../environments/environment";
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./core/modules/material.module.ts.module";
import {FirebaseModule} from "./core/modules/firebase.module";
import {TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {LanguageSelectModule} from "./components/language-select/language-select.module";
import {RouterModule} from "@angular/router";
import {LoaderInterceptor} from "./core/interseptors/loader.interceptor";
import {LoaderModule} from "./components/loader/loader.module";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        TranslateModule.forRoot(environment.translate),
        FirebaseModule,
        MaterialModule,
        LanguageSelectModule,
        RouterModule,
        LoaderModule,
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
