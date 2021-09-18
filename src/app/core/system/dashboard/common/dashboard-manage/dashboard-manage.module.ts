import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardManageComponent } from './dashboard-manage.component';
import {MaterialModule} from "../../../../modules/material.module.ts.module";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {InProgressModule} from "../in-progress/in-progress.module";



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
    InProgressModule
  ]
})
export class DashboardManageModule { }
