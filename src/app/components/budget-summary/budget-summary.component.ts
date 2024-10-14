import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-budget-summary',
  standalone: true,
  imports: [],
  templateUrl: './budget-summary.component.html',
  styleUrl: './budget-summary.component.css'
})
export class BudgetSummaryComponent {
  @Input() transactions: { description: string; amount: number }[] = [];

  get total() {
    return this.transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  }
}
