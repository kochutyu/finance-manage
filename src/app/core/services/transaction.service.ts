import {Injectable} from '@angular/core';
import {from, Observable} from "rxjs";
import {HttpService} from "./http.service";

export interface ITransaction {
  id: string;
  user: { balance?: number; imageUrl?: string; currencyCode?: string; };
  budget?: { balance?: number; imageUrl?: string; name?: string; currencyCode?: string; };
  currencyCode: string;
  createdAt: string;
  type: 'budget' | 'donate';
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends HttpService {
  private list$ = this.getDatabase().list(`${this.getBaseUrl}/transactions`);

  createTransaction(data: ITransaction): Observable<any> {
    const id = this.getDatabase().createPushId();
    const request = this.list$.set(id, {...data, id});
    return from(request);
  }

  deleteTransaction(id: string): Observable<any> {
    const request = this.list$.remove(id);
    return from(request);
  }

  editTransaction(budgetId: string, budget: ITransaction): Observable<any> {
    const request = this.list$.update(budgetId, budget);
    return from(request);
  }

  getTransactions(): Observable<ITransaction[]> {
    return this.list$.valueChanges() as Observable<ITransaction[]>;
  }

  defaultCurrencyCode(): string {
    return 'UAH';
  }
}
