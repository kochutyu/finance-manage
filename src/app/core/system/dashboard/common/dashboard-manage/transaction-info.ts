import {ITransaction} from "../../../../services/transaction.service";

export class TransactionInfoRequest implements ITransaction {
  id: string = '';
  user: { balance?: number; imageUrl?: string } = {};
  budget: { balance?: number; imageUrl?: string; name?: string } = {};
  currencyCode = 'UAH';
  createdAt: string;

  constructor(params: Record<string, any> = {}) {
    this.user.balance = (Number(params.amount) || 0) + (Number(params.balance) || 0);
    this.user.imageUrl = '';
    this.budget.balance = 0;
    this.budget.imageUrl = '';
    this.budget.name = '';
    this.createdAt = new Date().toISOString();
  }

  getParams(): Record<string, any> {
    return {
      user: this.user,
      budget: this.budget,
      currencyCode: this.currencyCode,
      createdAt: this.createdAt
    }
  }
}
