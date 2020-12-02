import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Transaction } from 'src/app/interfaces/transaction/transaction';
import { Type } from '../../../enums/transaction/type.enum'
import { LocalDataService } from 'src/app/services/localData/local-data.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  balance: number = 0;
  displayedColumns: string[] = ['concept', 'date', 'amount', 'type'];
  dataSource: MatTableDataSource<Transaction>;
  isDataEmpty = true;
  email: string;

  constructor(private localData: LocalDataService) {

    this.email = this.localData.email;

    if (localData.data.length > 0) {
      this.currentBalance();
      this.dataSource = new MatTableDataSource(this.lastTransactions());
      this.isDataEmpty = false;
    }

  }

  /**Return the sum of all transactions user, filtered by type. */
  currentBalance(): void {
    this.localData.data.map((transaction) => {
      transaction.type === Type.DEPOSIT ? this.balance += transaction.amount : this.balance -= transaction.amount;
    })
  }

  /** Returns the last 10 transactions created by the user. */
  lastTransactions(): Transaction[] {
    return this.localData.data.sort((a, b) => new Date(a.created_date).getTime() - new Date(b.created_date).getTime()).reverse().slice(0, 10)
  }

}
