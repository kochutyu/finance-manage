import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEditBudgetComponent } from './create-edit-budget.component';
import {AlertPopupWrapperModule} from "../../../../../../../components/popups/alert-popup-wrapper/alert-popup-wrapper.module";
import {TranslateModule} from "@ngx-translate/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../../../../../modules/material.module.ts.module";
import {DragAndDropImageModule} from "../../../../../../../components/form/drag-and-drop-image/drag-and-drop-image.module";
import {ConfirmPopupWrapperModule} from "../../../../../../../components/popups/confirm-popup-wrapper/confirm-popup-wrapper.module";



@NgModule({
  declarations: [
    CreateEditBudgetComponent
  ],
  imports: [
    CommonModule,
    AlertPopupWrapperModule,
    TranslateModule,
    ReactiveFormsModule,
    MaterialModule,
    DragAndDropImageModule,
    ConfirmPopupWrapperModule
  ]
})
export class CreateEditBudgetModule { }
