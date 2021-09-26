import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmPopupWrapperComponent} from './confirm-popup-wrapper.component';
import {MaterialModule} from "../../../core/modules/material.module.ts.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    ConfirmPopupWrapperComponent
  ],
  exports: [
    ConfirmPopupWrapperComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
  ]
})
export class ConfirmPopupWrapperModule {
}
