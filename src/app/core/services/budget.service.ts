import {Injectable} from '@angular/core';
import {from, Observable} from "rxjs";
import {HttpService} from "./http.service";

export interface IBudget {
  id?: string;
  name?: string;
  imageUrl?: string;
  amountGoal?: number;
  balance?: number;
  currencyCode?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BudgetService extends HttpService {
  private list$ = this.getDatabase().list(`${this.getBaseUrl}/budgets`);

  createBudget(data: IBudget): Observable<any> {
    const id = this.getDatabase().createPushId();
    const request = this.list$.set(id, {...data, id});
    return from(request);
  }

  deleteBudget(id: string): Observable<any> {
    const request = this.list$.remove(id);
    return from(request);
  }

  editBudget(budgetId: string, budget: IBudget): Observable<any> {
    const request = this.list$.update(budgetId, budget);
    return from(request);
  }

  getBudgets(): Observable<IBudget[]> {
    return this.list$.valueChanges() as Observable<IBudget[]>;
  }
}
