import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";
import {ActivatedRoute, Router} from "@angular/router";
import {DashboardActionService} from "./services/dashboard-action.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dashboardActionService: DashboardActionService
  ) {
  }

  ngOnInit(): void {
  }

  changeTab({tab}: MatTabChangeEvent) {
    this.dashboardActionService.changeTab(tab);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: {
        page: tab.textLabel.toLowerCase()
      }
    })
  }
}
