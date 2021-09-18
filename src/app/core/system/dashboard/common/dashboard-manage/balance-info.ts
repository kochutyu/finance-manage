export class BalanceInfo {
  balance: number;
  updatedAt: string;

  constructor(params: Record<string, any> = {}) {
    this.balance = (Number(params.amount) || 0) + (Number(params.balance) || 0);
    this.updatedAt = new Date().toISOString();
  }

  getParams(): Record<string, any> {
    return {
      balance: this.balance,
      updatedAt: this.updatedAt
    }
  }
}
