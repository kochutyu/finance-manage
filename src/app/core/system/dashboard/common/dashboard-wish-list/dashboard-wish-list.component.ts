import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {DashboardWishListControlsComponent} from "./common/dashboard-wish-list-controls/dashboard-wish-list-controls.component";
import {BudgetService, IBudget} from "../../../../services/budget.service";

@Component({
  selector: 'app-dashboard-wish-list',
  templateUrl: './dashboard-wish-list.component.html',
  styleUrls: ['./dashboard-wish-list.component.scss']
})
export class DashboardWishListComponent implements OnInit {
  budgets: IBudget[] = [];

  constructor(
    private _bottomSheet: MatBottomSheet,
    public budgetService: BudgetService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.budgetService.getBudgets().subscribe(budgets => {
      this.budgets = budgets;
      this.cdr.markForCheck();
    })
  }

  openLink(): void {
    this._bottomSheet.open(DashboardWishListControlsComponent);
  }
}
