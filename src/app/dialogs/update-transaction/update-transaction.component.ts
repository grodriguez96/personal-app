import { DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transaction } from 'src/app/interfaces/transaction/transaction';

@Component({
  selector: 'app-update-transaction',
  templateUrl: './update-transaction.component.html',
  styleUrls: ['./update-transaction.component.css']
})
export class UpdateTransactionComponent {

  form: FormGroup;
  minDate: Date;
  maxDate: Date;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) private transaction: Transaction, private datePipe: DatePipe) {
    this.form = this.fb.group({
      concept: new FormControl(this.transaction.concept, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      date: new FormControl(this.transaction.transactionDate, [Validators.required]),
      amount: new FormControl(this.transaction.amount, [Validators.required]),
      type: new FormControl(this.transaction.type, [Validators.required])
    })

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDate = new Date().getDate();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear, currentMonth, currentDate);
  }

  updateTransaction() {
    const data: Transaction = {
      id: this.transaction.id,
      concept: this.form.value['concept'],
      transactionDate: this.datePipe.transform(this.form.value['date'], 'yyyy-MM-dd'),
      amount: this.form.value['amount'],
      type: this.form.value['type'],
      creationDate: this.transaction.creationDate


    }
    return data;
  }

}
