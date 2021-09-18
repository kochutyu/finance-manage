import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InProgressComponent } from './in-progress.component';
import {MaterialModule} from "../../../../modules/material.module.ts.module";



@NgModule({
  declarations: [
    InProgressComponent
  ],
  exports: [
    InProgressComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class InProgressModule { }
