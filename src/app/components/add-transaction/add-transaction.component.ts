import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.css'
})
export class AddTransactionComponent {
  description: string = '';
  amount: number | null = null;

  @Output() transactionAdded = new EventEmitter<{ description: string; amount: number }>();

  addTransaction() {
    if (this.description && this.amount !== null) {
      this.transactionAdded.emit({ description: this.description, amount: this.amount });
      this.description = '';
      this.amount = null;
    }
  }
}
