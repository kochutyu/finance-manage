import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertPopupWrapperComponent} from './alert-popup-wrapper.component';
import {MaterialModule} from "../../../core/modules/material.module.ts.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    AlertPopupWrapperComponent
  ],
  exports: [
    AlertPopupWrapperComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
  ]
})
export class AlertPopupWrapperModule {
}
