import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {LoginToolbarModule} from "../../../components/toolbar/login-toolbar/login-toolbar.module";
import {MaterialModule} from "../../modules/material.module.ts.module";
import {TranslateModule} from "@ngx-translate/core";
import {DashboardInfoModule} from "./common/dashboard-info/dashboard-info.module";
import {DashboardManageModule} from "./common/dashboard-manage/dashboard-manage.module";
import {InProgressModule} from "./common/in-progress/in-progress.module";
import {DashboardWishListModule} from "./common/dashboard-wish-list/dashboard-wish-list.module";
import {DashboardHistoryModule} from "./common/dashboard-history/dashboard-history.module";
import {DashboardActionService} from "./services/dashboard-action.service";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    LoginToolbarModule,
    MaterialModule,
    TranslateModule,
    DashboardInfoModule,
    DashboardManageModule,
    InProgressModule,
    DashboardWishListModule,
    DashboardHistoryModule
  ],
  providers: [
    DashboardActionService
  ]
})
export class DashboardModule {
}
