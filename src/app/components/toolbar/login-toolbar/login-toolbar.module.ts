import {NgModule} from '@angular/core';
import {LoginToolbarComponent} from './login-toolbar.component';
import {MaterialModule} from "../../../core/modules/material.module.ts.module";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageSelectModule} from "../../language-select/language-select.module";


@NgModule({
  declarations: [
    LoginToolbarComponent
  ],
  exports: [
    LoginToolbarComponent
  ],
  imports: [
    MaterialModule,
    TranslateModule,
    LanguageSelectModule
  ]
})
export class LoginToolbarModule {
}
