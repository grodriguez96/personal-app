import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/interfaces/transaction/transaction';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  constructor() { }

  private _data: Transaction[];

  private _emailGuest = 'invitado@gmail.com';

  public get emailGuest() {
    return this._emailGuest;
  }

  private _passwordGuest = 'invitado1234';

  public get passwordGuest() {
    return this._passwordGuest;
  }



  private _email: string;

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public get data(): Transaction[] {
    return this._data;
  }
  public set data(value: Transaction[]) {
    this._data = value;
  }




}
