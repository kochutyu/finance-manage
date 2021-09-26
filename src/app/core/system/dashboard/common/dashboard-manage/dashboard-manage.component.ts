import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BalanceInfo} from "./balance-info";
import {HttpService} from "../../../../services/http.service";
import {map, startWith, take, takeUntil, tap} from "rxjs/operators";
import {AuthService} from "../../../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TranslateService} from "@ngx-translate/core";
import {UserService} from "../../../../services/user.service";
import {BehaviorSubject, Subject} from "rxjs";
import {TransactionService} from "../../../../services/transaction.service";
import {BudgetService, IBudget} from "../../../../services/budget.service";

interface ICalcTransaction {
  percent: number;
  amount: number;
  total: number;
  userBalance: number;
  totalUserBalance: number;
}

@Component({
  selector: 'app-dashboard-manage',
  templateUrl: './dashboard-manage.component.html',
  styleUrls: ['./dashboard-manage.component.scss']
})
export class DashboardManageComponent implements OnInit, OnDestroy {

  panelOpenState = true;
  // @ts-ignore
  calcTransaction: ICalcTransaction;

  createBalanceForm: FormGroup;
  createTransactionForm: FormGroup;
  userBalance: number = 0;

  /*** Controls **/
  private updateTransactionCalc$ = new BehaviorSubject<void | null>(null);
  private destroySubject$ = new Subject();

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private translateService: TranslateService,
    private transactionService: TransactionService,
    private budgetService: BudgetService,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {
    this.createBalanceForm = this.fb.group({
      amount: this.fb.control(null, [Validators.pattern(/^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/), Validators.required, Validators.min(0)])
    });
    this.createTransactionForm = this.fb.group({
      budget: this.fb.control(null, [Validators.required]),
      percent: this.fb.control(10, [Validators.required]),
      amount: this.fb.control(0, [Validators.required, Validators.pattern(/^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/)])
    });
  }

  ngOnInit(): void {
    this.initData();
    this.detectCalcTransaction();
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
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
          this.initData();
        })
      })

  }

  public calcTotalTransaction(): void {
    this.createTransactionForm.valueChanges.pipe(
      startWith(this.createTransactionForm.value),
      map(({amount, percent}) => {
        return {
          percent: (+percent) / 100,
          amount: +(+amount).toFixed(2),
          total: +Math.abs((+percent) / 100 * (+amount)).toFixed(2),
        }
      }),
      map(value => {
        return {
          ...value,
          userBalance: +(this.userBalance).toFixed(2),
          totalUserBalance: +(this.userBalance - value.total).toFixed(2)
        }
      }),
      tap((calcTransaction) => {
        this.calcTransaction = calcTransaction;
        this.cdr.markForCheck();
      }),
      take(1),
    ).subscribe()
  }

  private initData(): void {
    this.userService.getUserBalance().subscribe(balance => {
      this.userBalance = +balance.toFixed(2);
      this.createTransactionForm.get('amount')?.patchValue(this.userBalance);
      this.updateCalcTransaction();
    })
  }

  private detectCalcTransaction(): void {
    this.createTransactionForm.valueChanges.pipe(
      takeUntil(this.destroySubject$)
    ).subscribe(() => this.updateCalcTransaction());
    this.updateTransactionCalc$.asObservable().pipe(
      takeUntil(this.destroySubject$)
    ).subscribe(() => {
      this.calcTotalTransaction();
    });
  }

  private updateCalcTransaction(): void {
    this.updateTransactionCalc$.next();
  }

  createTransaction() {
    const budget: IBudget = this.createTransactionForm.get('budget')?.value;
    const userBalanceInfo = new BalanceInfo({
      amount: -this.calcTransaction.total,
      balance: this.userBalance
    })
    this.userService.updateUserBalance(userBalanceInfo).subscribe((balance) => {
      const budgetParams = {
        balance: (budget.balance || 0) + this.calcTransaction.total,
        imageUrl: budget.imageUrl,
        name: budget.name,
        currencyCode: this.transactionService.defaultCurrencyCode()
      };
      const userParams = {
        balance: userBalanceInfo.getParams().balance,
        imageUrl: '',
        currencyCode: this.transactionService.defaultCurrencyCode()
      };
      this.transactionService.createTransaction({
        id: this.transactionService.getDatabase().createPushId(),
        user: userParams,
        budget: budgetParams,
        createdAt: new Date().toISOString(),
        currencyCode: this.transactionService.defaultCurrencyCode(),
        amount: this.calcTransaction.total,
        type: 'budget'
      }).subscribe(() => {
        this.createTransactionForm.get('budget')?.reset(null);
        this.budgetService.editBudget(budget.id || '', {
          balance: budgetParams.balance,
          currencyCode: budgetParams.currencyCode
        })
        this.initData();
      });
    });
  }
}
