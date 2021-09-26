import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {LoaderService} from "./core/services/loader.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {LoaderComponent} from "./components/loader/loader.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  loader: MatDialogRef<LoaderComponent> | null = null;

  constructor(
    public loaderService: LoaderService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {
    this.loaderService.detect$().subscribe(isShow => {
      console.log(isShow)
      if (!isShow && this.loader) {
        this.loaderService.hide();
        this.loader?.close();
        this.loader = null;
      }
      if (isShow) {
        this.loader = this.dialog.open(LoaderComponent);
      }
    });
    this.router.navigateByUrl('/dashboard');
  }

  ngOnDestroy() {
    localStorage.clear();
  }
}
