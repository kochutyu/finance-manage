import {NgModule} from '@angular/core';
import {DragAndDropImageComponent} from './drag-and-drop-image.component';
import {ImageCropperModule} from "ngx-image-cropper";
import {DragAndDropImagePopupComponent} from './drag-and-drop-image-popup/drag-and-drop-image-popup.component';
import {AlertPopupWrapperModule} from "../../popups/alert-popup-wrapper/alert-popup-wrapper.module";
import {MaterialModule} from "../../../core/modules/material.module.ts.module";
import {NgxMatFileInputModule} from "@angular-material-components/file-input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConfirmPopupWrapperModule} from "../../popups/confirm-popup-wrapper/confirm-popup-wrapper.module";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    DragAndDropImageComponent,
    DragAndDropImagePopupComponent
  ],
  exports: [
    DragAndDropImageComponent
  ],
    imports: [
        ImageCropperModule,
        AlertPopupWrapperModule,
        MaterialModule,
        NgxMatFileInputModule,
        ReactiveFormsModule,
        FormsModule,
        ConfirmPopupWrapperModule,
        TranslateModule
    ]
})
export class DragAndDropImageModule {
}
