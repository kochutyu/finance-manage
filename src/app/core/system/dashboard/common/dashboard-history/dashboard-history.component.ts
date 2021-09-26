import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ITransaction, TransactionService} from "../../../../services/transaction.service";

@Component({
  selector: 'app-dashboard-history',
  templateUrl: './dashboard-history.component.html',
  styleUrls: ['./dashboard-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHistoryComponent implements OnInit {

  transactions: ITransaction[] = [];

  constructor(
    private transactionService: TransactionService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(transactions => {
      transactions.forEach(item => {
        this.transactions.unshift(item);
      })
      this.cdr.markForCheck();
    })
  }

}
