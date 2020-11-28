import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from 'src/app/interfaces/transaction/transaction';
import { Type } from '../../../enums/transaction/type.enum'
import { LocalDataService } from 'src/app/services/localData/local-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  balance: number;
  displayedColumns: string[] = ['concept', 'date', 'amount', 'type'];
  dataSource: MatTableDataSource<Transaction>;

  constructor(private localData: LocalDataService) {
    this.balance = this.currentBalance(this.localData.data);
    this.dataSource = new MatTableDataSource(this.lastTransactions());
  }

  currentBalance(transactions: Transaction[]): number {
    let balance = 0;
    if (transactions) {
      transactions.forEach(transaction => {
        transaction.type === Type.DEPOSIT ? balance += transaction.amount : balance -= transaction.amount;
      });
    }
    return balance;
  }

  lastTransactions(): Transaction[] {
    let data = []
    if (this.localData.data) {
      data = this.localData.data.sort((a, b) => new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime()).reverse().slice(0, 9);
    }
    return data;
  }
}
