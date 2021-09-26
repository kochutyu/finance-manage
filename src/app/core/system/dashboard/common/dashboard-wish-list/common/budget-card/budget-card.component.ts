import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {BudgetService, IBudget} from "../../../../../../services/budget.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmPopupWrapperComponent} from "../../../../../../../components/popups/confirm-popup-wrapper/confirm-popup-wrapper.component";
import {IPopupMassage} from "../../../../../../../components/popups/interface/popup-massage.interface";
import {CreateEditBudgetComponent} from "../../popups/create-edit-budget/create-edit-budget.component";

@Component({
  selector: 'app-budget-card',
  templateUrl: './budget-card.component.html',
  styleUrls: ['./budget-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetCardComponent {
  // @ts-ignore
  @Input() budget: IBudget;

  constructor(
    public budgetService: BudgetService,
    private dialog: MatDialog
  ) {
  }

  delete() {
    const data: IPopupMassage = {message: "areYouSureDeleteTheBudget", title: 'info'};
    const dialogRef = this.dialog.open(ConfirmPopupWrapperComponent, {data});
    dialogRef.afterClosed().subscribe(data => {
      if (data && data.isConfirm) {
        this.budgetService.deleteBudget(this.budget.id || '').subscribe();
      }
    })
  }

  edit() {
    const data: IBudget = this.budget;
    const dialogRef = this.dialog.open(CreateEditBudgetComponent, {data});
  }
}
