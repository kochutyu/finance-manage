import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs";
import {BalanceInfo} from "../system/dashboard/common/dashboard-manage/balance-info";

@Injectable({
  providedIn: 'root'
})
export class UserService extends HttpService {

  private baseBalanceInfoUrl = `${this.getBaseUrl}/dashboard/balanceInfo`;

  getUserBalance(): Observable<number> {
    return this.get(`${this.baseBalanceInfoUrl}/balance`);
  }

  updateUserBalance(data: BalanceInfo): Observable<any> {
    return this.update(`${this.baseBalanceInfoUrl}`, data.getParams());
  }
}
