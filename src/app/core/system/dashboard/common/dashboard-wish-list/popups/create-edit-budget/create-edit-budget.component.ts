import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BudgetService, IBudget} from "../../../../../../services/budget.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LoaderService} from "../../../../../../services/loader.service";
import {of} from "rxjs";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-create-edit-budget',
  templateUrl: './create-edit-budget.component.html',
  styleUrls: ['./create-edit-budget.component.scss']
})
export class CreateEditBudgetComponent implements OnInit {

  createBudgetForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IBudget,
    public dialogRef: MatDialogRef<CreateEditBudgetComponent>,
    private fb: FormBuilder,
    private budgetService: BudgetService,
    private loaderService: LoaderService
  ) {
    this.createBudgetForm = this.fb.group({
      name: this.fb.control(data ? data.name : null, [Validators.required]),
      imageUrl: this.fb.control(data ? data.imageUrl : null, [Validators.required]),
      amountGoal: this.fb.control(data ? data.amountGoal : null, [Validators.required, Validators.min(1)])
    });
    // this.budgetService.getStorage().
  }

  ngOnInit(): void {
    this.budgetService.getBudgets().subscribe(res => {
      console.log(res)
    })
  }

  createBudget() {
    this.loaderService.show();
    of(this.data).pipe(
      map(data => !!data),
      switchMap(isEdit => {
        if (isEdit) {
          return this.budgetService.editBudget(this.data.id || '', this.createBudgetForm.value);
        }
        return this.budgetService.createBudget(this.createBudgetForm.value);
      })
    ).subscribe(() => {
      this.loaderService.hide();
      this.dialogRef.close();
    });
  }
}
