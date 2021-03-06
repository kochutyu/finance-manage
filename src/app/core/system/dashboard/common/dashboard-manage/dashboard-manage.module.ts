import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardManageComponent } from './dashboard-manage.component';
import {MaterialModule} from "../../../../modules/material.module.ts.module";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {InProgressModule} from "../in-progress/in-progress.module";
import {BudgetSelectModule} from "../../../../../components/form/budget-select/budget-select.module";
import {PercentSelectModule} from "../../../../../components/form/percent-select/percent-select.module";



@NgModule({
  declarations: [
    DashboardManageComponent
  ],
  exports: [
    DashboardManageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    ReactiveFormsModule,
    InProgressModule,
    BudgetSelectModule,
    PercentSelectModule
  ]
})
export class DashboardManageModule { }
