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
  online = 'https://personal-app-api-8.herokuapp.com'

  /**Change if you want local server or online server  */
  url = this.online;

  /** Get all user transactions data   */
  getTransactions(id: string) {
    return this.http.get<Transaction[]>(`${this.url}/transaction/${id}`)
  }

  /** Create transaction */
  postTransaction(data) {
    return this.http.post<Transaction[]>(`${this.url}/transaction`, data)
  }

  /** Update transaction */
  putTransaction(data, id: number) {
    return this.http.put<Transaction[]>(`${this.url}/transaction/${id}`, data)
  }

  /**Delete transaction */
  deleteTransaction(id: number) {
    return this.http.delete(`${this.url}/transaction/${id}`)
  }
}
