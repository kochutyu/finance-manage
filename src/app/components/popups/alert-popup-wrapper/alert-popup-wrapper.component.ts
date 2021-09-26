import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IPopupMassage} from "../interface/popup-massage.interface";

@Component({
  selector: 'app-alert-popup-wrapper',
  templateUrl: './alert-popup-wrapper.component.html',
  styleUrls: ['./alert-popup-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertPopupWrapperComponent {
  /*** General config **/
  @Input() isPopup = true; // by default as popup

  /*** Submit config **/
  @Input() submitBtnName = 'submit';
  @Input() disableSubmitBtn = false;

  @Output() handleSubmit = new EventEmitter<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IPopupMassage,
    public dialogRef: MatDialogRef<AlertPopupWrapperComponent>
  ) {
  }

  submit() {
    this.handleSubmit.emit();
    if (this.isPopup) {
      this.dialogRef.close({isConfirm: true});
    }
  }
}
