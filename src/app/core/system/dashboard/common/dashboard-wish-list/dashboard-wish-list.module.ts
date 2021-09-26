import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardWishListComponent} from './dashboard-wish-list.component';
import {InProgressModule} from "../in-progress/in-progress.module";
import {MaterialModule} from "../../../../modules/material.module.ts.module";
import {DashboardWishListControlsModule} from "./common/dashboard-wish-list-controls/dashboard-wish-list-controls.module";
import {CreateEditBudgetModule} from "./popups/create-edit-budget/create-edit-budget.module";
import {DragAndDropImageModule} from "../../../../../components/form/drag-and-drop-image/drag-and-drop-image.module";
import {BudgetCardModule} from "./common/budget-card/budget-card.module";


@NgModule({
  declarations: [
    DashboardWishListComponent
  ],
  exports: [
    DashboardWishListComponent
  ],
  imports: [
    CommonModule,
    InProgressModule,
    DashboardWishListControlsModule,
    MaterialModule,
    CreateEditBudgetModule,
    DragAndDropImageModule,
    BudgetCardModule
  ]
})
export class DashboardWishListModule {
}
