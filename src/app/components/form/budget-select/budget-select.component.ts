import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Injector, OnInit} from '@angular/core';
import {BaseControlComponent} from "../base-control.component";
import {NG_VALUE_ACCESSOR} from "@angular/forms";
import {BudgetService, IBudget} from "../../../core/services/budget.service";

@Component({
  selector: 'app-budget-select',
  templateUrl: './budget-select.component.html',
  styleUrls: ['./budget-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BudgetSelectComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetSelectComponent extends BaseControlComponent implements OnInit {
  public budgets: IBudget[] = [];

  constructor(
    protected injector: Injector,
    private budgetService: BudgetService,
    private cdr: ChangeDetectorRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.budgetService.getBudgets().subscribe(budgets => {
      this.budgets = budgets;
      this.cdr.markForCheck();
    })
  }

}
