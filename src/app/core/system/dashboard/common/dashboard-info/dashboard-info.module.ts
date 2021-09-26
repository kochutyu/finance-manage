import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardInfoComponent } from './dashboard-info.component';
import {TranslateModule} from "@ngx-translate/core";
import {MaterialModule} from "../../../../modules/material.module.ts.module";
import {DragAndDropImageModule} from "../../../../../components/form/drag-and-drop-image/drag-and-drop-image.module";
import {ReactiveFormsModule} from "@angular/forms";



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
    MaterialModule,
    DragAndDropImageModule,
    ReactiveFormsModule
  ]
})
export class DashboardInfoModule { }
