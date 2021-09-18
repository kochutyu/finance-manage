import {BalanceInfo} from "../dashboard-manage/balance-info";

export class DashboardInfoModel {
  balanceInfo: BalanceInfo;

  constructor(params: Record<string, any> = {}) {
    this.balanceInfo = new BalanceInfo(params.balanceInfo);
  }
}
