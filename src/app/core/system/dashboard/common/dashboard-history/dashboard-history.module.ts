import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHistoryComponent } from './dashboard-history.component';
import {InProgressModule} from "../in-progress/in-progress.module";



@NgModule({
  declarations: [
    DashboardHistoryComponent
  ],
  exports: [
    DashboardHistoryComponent
  ],
  imports: [
    CommonModule,
    InProgressModule
  ]
})
export class DashboardHistoryModule { }
