import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { BudgetSummaryComponent } from './components/budget-summary/budget-summary.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AddTransactionComponent,
    BudgetSummaryComponent,
    TransactionListComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Administrador de presupuesto';
  transactions: { description: string; amount: number }[] = [];

  addTransaction(transaction: { description: string; amount: number }) {
    this.transactions.push(transaction);
  }
}
