import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetSelectComponent } from './budget-select.component';
import {MaterialModule} from "../../../core/modules/material.module.ts.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    BudgetSelectComponent
  ],
  exports: [
    BudgetSelectComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class BudgetSelectModule { }
