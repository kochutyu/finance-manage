import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercentSelectComponent } from './percent-select.component';
import {MaterialModule} from "../../../core/modules/material.module.ts.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PercentSelectComponent
  ],
  exports: [
    PercentSelectComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PercentSelectModule { }
