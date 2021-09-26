import {Component, Inject} from '@angular/core';
import {ImageCroppedEvent} from "ngx-image-cropper";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IDragAndDropImage} from "../interface/drag-and-drop-image.interface";
import {HttpService} from "../../../../core/services/http.service";
import {of} from "rxjs";
import {finalize, map, switchMap} from "rxjs/operators";
import {LoaderService} from "../../../../core/services/loader.service";

@Component({
  selector: 'app-drag-and-drop-image-popup',
  templateUrl: './drag-and-drop-image-popup.component.html',
  styleUrls: ['./drag-and-drop-image-popup.component.scss']
})
export class DragAndDropImagePopupComponent {
  /*** Data **/
  isPopup = false;

  /*** Lib data **/
  croppedImage: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDragAndDropImage,
    public dialogRef: MatDialogRef<DragAndDropImagePopupComponent>,
    private httpService: HttpService,
    private loaderService: LoaderService
  ) {
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  save(): void {
    this.loaderService.show();
    const defaultFile: File = this.data.inputEvent.target.files[0];
    let image: File;
    fetch(this.croppedImage).then(response => response.blob()).then(blob => {
      const uploadFile = of(blob).pipe(
        map((blob) => new File([blob], defaultFile.name, {type: "image/png"})),
        switchMap((file: File) => {
          image = file;
          return this.httpService.uploadFile(file);
        })
      )
      uploadFile.pipe(
        finalize(() => this.loaderService.hide())
      ).subscribe(imageUrl => {
        console.log(imageUrl);
        this.close({
          imageUrl,
          base64: this.croppedImage,
          image
        })
      });
    }).catch(() => this.loaderService.hide());

  }

  close(data: { imageUrl?: string; base64?: string; image?: File }): void {
    this.dialogRef.close({imageUrl: data.imageUrl || null, base64: data.base64 || null, image: data.image || null});
  }
}
