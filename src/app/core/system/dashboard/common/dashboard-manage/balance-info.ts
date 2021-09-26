export class BalanceInfo {
  balance: number;
  updatedAt: string;
  currencyCode: string;

  constructor(params: Record<string, any> = {}) {
    this.currencyCode = params.currencyCode || 'UAH';
    this.balance = (Number(params.amount) || 0) + (Number(params.balance) || 0);
    this.updatedAt = new Date().toISOString();
  }

  getParams(): Record<string, any> {
    return {
      balance: this.balance,
      currencyCode: this.currencyCode,
      updatedAt: this.updatedAt
    }
  }
}
