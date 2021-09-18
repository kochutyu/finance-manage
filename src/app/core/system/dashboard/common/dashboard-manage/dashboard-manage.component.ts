import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BalanceInfo} from "./balance-info";
import {HttpService} from "../../../../services/http.service";
import {take} from "rxjs/operators";
import {AuthService} from "../../../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-dashboard-manage',
  templateUrl: './dashboard-manage.component.html',
  styleUrls: ['./dashboard-manage.component.scss']
})
export class DashboardManageComponent implements OnInit {

  createBalanceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private translateService: TranslateService
  ) {
    this.createBalanceForm = this.fb.group({
      amount: this.fb.control(0, [Validators.pattern(/^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/), Validators.required])
    });
  }

  ngOnInit(): void {
  }

  createBalance() {
    console.log(`${this.authService.email}/dashboard/balanceInfo`)
    this.httpService.get(`${this.authService.email}/dashboard/balanceInfo`)
      .pipe(
        take(1)
      )
      .subscribe(dashboard => {
        const request = new BalanceInfo({
          ...this.createBalanceForm.value,
          ...dashboard
        }).getParams();

        const youBalanceWasUpdated = this.translateService.instant('youBalanceWasUpdated');
        const info = this.translateService.instant('info');
        this.httpService.update(`${this.authService.email}/dashboard/balanceInfo`, request).subscribe(res => {
          this.snackBar.open(youBalanceWasUpdated, info)
          this.createBalanceForm.reset({
            amount: 0
          });
        })
      })

  }
}
