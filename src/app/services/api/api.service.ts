import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/interfaces/transaction/transaction';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  local = 'http://localhost:4000'

  url = this.local;

  /** Get all user transactions data   */
  getTransactions(id: string) {
    return this.http.get<Transaction[]>(`${this.url}/transaction/${id}`)
  }

  /** Create one or multiples transaction */
  postTransaction(data) {
    return this.http.post<Transaction[]>(`${this.url}/transaction`, data)
  }
}
