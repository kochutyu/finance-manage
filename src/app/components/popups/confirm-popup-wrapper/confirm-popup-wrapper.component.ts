import {ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IPopupMassage} from "../interface/popup-massage.interface";

@Component({
  selector: 'app-confirm-popup-wrapper',
  templateUrl: './confirm-popup-wrapper.component.html',
  styleUrls: ['./confirm-popup-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmPopupWrapperComponent {
  /*** General config **/
  @Input() isPopup = true; // by default as popup

  /*** Submit config **/
  @Input() cancelBtnName = 'cancel';
  @Input() disableCancelBtn = false;

  /*** Submit config **/
  @Input() submitBtnName = 'submit';
  @Input() disableSubmitBtn = false;

  @Output() handleSubmit = new EventEmitter<void>();
  @Output() handleCancel = new EventEmitter<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IPopupMassage,
    public dialogRef: MatDialogRef<ConfirmPopupWrapperComponent>
  ) {
  }

  cancel() {
    this.handleCancel.emit();
    if (this.isPopup) {
      this.dialogRef.close({isConfirm: false});
    }
  }

  submit() {
    this.handleSubmit.emit();
    if (this.isPopup) {
      this.dialogRef.close({isConfirm: true});
    }
  }
}
