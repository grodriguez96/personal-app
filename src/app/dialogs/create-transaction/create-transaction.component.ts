import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Type } from 'src/app/enums/transaction/type.enum';
import { Transaction } from 'src/app/interfaces/transaction/transaction';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent {

  form: FormGroup;
  type: Type;
  minDate: Date;
  maxDate: Date;


  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
    this.form = this.fb.group({
      concept: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      date: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required])
    })

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear, currentMonth, currentDate);

  }

  /** Create a new transaction, assign form values and return it. */
  createTransaction() {
    const { concept, date, amount, type } = this.form.value
    const data = {
      concept,
      transaction_date: this.datePipe.transform(date, 'yyyy-MM-dd'),
      amount,
      type
    }
    return data;
  }

}
