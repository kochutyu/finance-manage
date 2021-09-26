import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardWishListControlsComponent } from './dashboard-wish-list-controls.component';
import {MaterialModule} from "../../../../../../modules/material.module.ts.module";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [
    DashboardWishListControlsComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        TranslateModule
    ]
})
export class DashboardWishListControlsModule { }
