import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardWishListComponent } from './dashboard-wish-list.component';
import {InProgressModule} from "../in-progress/in-progress.module";



@NgModule({
  declarations: [
    DashboardWishListComponent
  ],
  exports: [
    DashboardWishListComponent
  ],
  imports: [
    CommonModule,
    InProgressModule
  ]
})
export class DashboardWishListModule { }
