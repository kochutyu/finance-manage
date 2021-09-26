import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Injector,
  Input,
  OnInit
} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {IDragAndDropImage} from "./interface/drag-and-drop-image.interface";
import {DragAndDropImagePopupComponent} from "./drag-and-drop-image-popup/drag-and-drop-image-popup.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {BaseControlComponent} from "../base-control.component";

@Component({
  selector: 'app-drag-and-drop-image',
  templateUrl: './drag-and-drop-image.component.html',
  styleUrls: ['./drag-and-drop-image.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DragAndDropImageComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragAndDropImageComponent extends BaseControlComponent implements OnInit {
  /*** Drag config **/
  @Input() aspectRatio = 1;

  /*** Image info **/
  accept: string = 'image/jpeg,image/jpg,image/png';
  size = 5000000;
  image = null;

  constructor(
    protected injector: Injector,
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
    super(injector);
  }

  ngOnInit() {
  }

  selectImage(inputEvent: any, inputRef: HTMLInputElement) {
    const data: IDragAndDropImage = {inputEvent, inputRef, aspectRatio: this.aspectRatio};
    const dialogRef = this.dialog.open(DragAndDropImagePopupComponent, {
      data
    });
    dialogRef.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }
      this.image = response.image;
      this.control.patchValue(response.imageUrl);
      this.cdr.markForCheck();
    });
  }

  selectFile(event: MouseEvent, fileInput: HTMLInputElement) {
    event.stopPropagation();
    event.preventDefault();
    fileInput.click();
  }
}
