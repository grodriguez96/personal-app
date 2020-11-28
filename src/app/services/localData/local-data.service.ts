import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/interfaces/transaction/transaction';
import { Type } from '../../enums/transaction/type.enum'

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  private _data: Transaction[] = [
    { id: 1, concept: "Pago de netflix", date: "2001-08-23", amount: 2.5, type: Type.WITHDRAWALS },
    { id: 2, concept: "Pago de cine", date: "2002-07-05", amount: 0.5, type: Type.WITHDRAWALS },
    { id: 3, concept: "Pago de Alquiler", date: "2002-04-12", amount: 20, type: Type.WITHDRAWALS },
    { id: 4, concept: "Sueldo", date: "2003-06-20", amount: 50, type: Type.DEPOSIT },
    { id: 5, concept: "Bono de navidad", date: "2000-11-14", amount: 5, type: Type.DEPOSIT },
    { id: 6, concept: "Pago de ABL", date: "2011-07-14", amount: 200, type: Type.WITHDRAWALS },
    { id: 20, concept: "Pago de cine 2", date: "2002-07-05", amount: 0.5, type: Type.WITHDRAWALS },
    { id: 30, concept: "Pago de Alquiler 3", date: "2002-04-12", amount: 20, type: Type.WITHDRAWALS },
    { id: 40, concept: "Sueldo 2", date: "2003-06-20", amount: 50, type: Type.DEPOSIT },
    { id: 50, concept: "Bono de navidad 2", date: "2000-11-14", amount: 5, type: Type.DEPOSIT },
    { id: 60, concept: "Pago de ABL 2", date: "2011-07-14", amount: 200, type: Type.WITHDRAWALS },
  ]

  public get data(): Transaction[] {
    return this._data;
  }
  public set data(value: Transaction[]) {
    this._data = value;
  }


}
