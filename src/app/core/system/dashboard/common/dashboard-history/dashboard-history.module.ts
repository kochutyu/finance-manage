import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHistoryComponent } from './dashboard-history.component';
import {InProgressModule} from "../in-progress/in-progress.module";
import {MaterialModule} from "../../../../modules/material.module.ts.module";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    DashboardHistoryComponent
  ],
  exports: [
    DashboardHistoryComponent
  ],
  imports: [
    CommonModule,
    InProgressModule,
    MaterialModule,
    TranslateModule
  ]
})
export class DashboardHistoryModule { }
