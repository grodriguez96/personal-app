import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/interfaces/transaction/transaction';
import { Type } from '../../enums/transaction/type.enum'

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  private _data: Transaction[] = [
    { id: 1, concept: "Netflix", amount: 5, transactionDate: "2011-08-23", type: Type.WITHDRAWALS, creationDate: "2020/09/23 05:10:06" },
    { id: 2, concept: "Sueldo", amount: 10, transactionDate: "2011-09-23", type: Type.DEPOSIT, creationDate: "2020/09/24 05:10:20" },
    { id: 3, concept: "Netflix", amount: 5, transactionDate: "2011-08-23", type: Type.WITHDRAWALS, creationDate: "2020/09/23 05:10:07" },
    { id: 4, concept: "Sueldo", amount: 10, transactionDate: "2011-09-23", type: Type.DEPOSIT, creationDate: "2020/09/24 05:10:08" },
    { id: 5, concept: "Netflix", amount: 5, transactionDate: "2011-08-23", type: Type.WITHDRAWALS, creationDate: "2020/09/23 05:10:09" },
    { id: 6, concept: "Sueldo", amount: 10, transactionDate: "2011-09-23", type: Type.DEPOSIT, creationDate: "2020/09/24 05:10:06" },
    { id: 7, concept: "Netflix", amount: 5, transactionDate: "2011-08-23", type: Type.WITHDRAWALS, creationDate: "2020/09/23 05:10:10" },
    { id: 8, concept: "Sueldo", amount: 10, transactionDate: "2011-09-23", type: Type.DEPOSIT, creationDate: "2020/09/24 05:10:11" },
    { id: 9, concept: "Netflix", amount: 5, transactionDate: "2011-08-23", type: Type.WITHDRAWALS, creationDate: "2020/09/23 05:10:12" },
    { id: 10, concept: "Sueldo", amount: 10, transactionDate: "2011-09-23", type: Type.DEPOSIT, creationDate: "2020/09/24 05:10:13" },
  ]

  public get data(): Transaction[] {
    return this._data;
  }
  public set data(value: Transaction[]) {
    this._data = value;
  }


}
