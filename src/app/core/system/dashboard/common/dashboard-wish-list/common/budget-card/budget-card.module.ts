import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetCardComponent } from './budget-card.component';
import {MaterialModule} from "../../../../../../modules/material.module.ts.module";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    BudgetCardComponent
  ],
  exports: [
    BudgetCardComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        TranslateModule
    ]
})
export class BudgetCardModule { }
