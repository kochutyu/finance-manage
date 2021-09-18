import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardInfoComponent } from './dashboard-info.component';
import {TranslateModule} from "@ngx-translate/core";
import {MaterialModule} from "../../../../modules/material.module.ts.module";



@NgModule({
    declarations: [
        DashboardInfoComponent
    ],
    exports: [
        DashboardInfoComponent
    ],
  imports: [
    CommonModule,
    TranslateModule,
    MaterialModule
  ]
})
export class DashboardInfoModule { }
