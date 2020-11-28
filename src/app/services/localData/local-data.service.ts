import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/interfaces/transaction/transaction';
import { Type } from '../../enums/transaction/type.enum'

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  private _data: Transaction[]

  public get data(): Transaction[] {
    return this._data;
  }
  public set data(value: Transaction[]) {
    this._data = value;
  }


}
