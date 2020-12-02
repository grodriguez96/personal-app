import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transaction } from 'src/app/interfaces/transaction/transaction';

@Component({
  selector: 'app-delete-transaction',
  templateUrl: './delete-transaction.component.html',
  styleUrls: ['./delete-transaction.component.css']
})
export class DeleteTransactionComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public transaction: Transaction) {
  }

  deleteTransaction() {
    return this.transaction.id;
  }

}
