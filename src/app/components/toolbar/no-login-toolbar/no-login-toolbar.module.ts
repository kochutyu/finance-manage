import {NgModule} from '@angular/core';
import {NoLoginToolbarComponent} from './no-login-toolbar.component';
import {MaterialModule} from "../../../core/modules/material.module.ts.module";
import {TranslateModule} from "@ngx-translate/core";
import {LanguageSelectModule} from "../../language-select/language-select.module";


@NgModule({
  declarations: [
    NoLoginToolbarComponent
  ],
  exports: [
    NoLoginToolbarComponent
  ],
  imports: [
    MaterialModule,
    TranslateModule,
    LanguageSelectModule
  ]
})
export class NoLoginToolbarModule {
}
