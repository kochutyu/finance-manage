import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSelectComponent } from './language-select.component';
import {MaterialModule} from "../../core/modules/material.module.ts.module";



@NgModule({
  declarations: [
    LanguageSelectComponent
  ],
  exports: [
    LanguageSelectComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LanguageSelectModule { }
