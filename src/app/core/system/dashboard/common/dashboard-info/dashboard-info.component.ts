import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HttpService} from "../../../../services/http.service";
import {DashboardInfoModel} from "./dashboard-info.model";
import {AuthService} from "../../../../services/auth.service";
import {DashboardActionService} from "../../services/dashboard-action.service";

@Component({
  selector: 'app-dashboard-info',
  templateUrl: './dashboard-info.component.html',
  styleUrls: ['./dashboard-info.component.scss']
})
export class DashboardInfoComponent implements OnInit {

  public dashboard: DashboardInfoModel;

  constructor(
    private dashboardActionService: DashboardActionService,
    private httpService: HttpService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    this.dashboard = new DashboardInfoModel({});
  }

  ngOnInit(): void {
    this.getDashboardInfo();
    this.dashboardActionService.handleChangeTab$().subscribe(tab => {
      this.getDashboardInfo();
    })
  }

  private getDashboardInfo(): void {
    this.httpService.get(`${this.authService.email}/dashboard`).subscribe(res => {
      this.dashboard = new DashboardInfoModel(res || {});
      this.cdr.markForCheck();
    });
  }

}
