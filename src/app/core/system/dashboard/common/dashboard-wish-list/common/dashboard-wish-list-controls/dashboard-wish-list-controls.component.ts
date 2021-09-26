import {Component, OnInit} from '@angular/core';
import {MatBottomSheetRef} from "@angular/material/bottom-sheet";
import {MatDialog} from "@angular/material/dialog";
import {CreateEditBudgetComponent} from "../../popups/create-edit-budget/create-edit-budget.component";

@Component({
  selector: 'app-dashboard-wish-list-controls',
  templateUrl: './dashboard-wish-list-controls.component.html',
  styleUrls: ['./dashboard-wish-list-controls.component.scss']
})
export class DashboardWishListControlsComponent implements OnInit {

  constructor(
    private bottomSheetRef: MatBottomSheetRef<DashboardWishListControlsComponent>,
    private dialog: MatDialog
  ) {
  }

  openLink(event: MouseEvent, type: string): void {
    if (type === 'create-edit-budget') {
      this.dialog.open(CreateEditBudgetComponent, {disableClose: true});
    }
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
  }

}
