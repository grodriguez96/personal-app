import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Type } from 'src/app/enums/transaction/type.enum';

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

  createTransaction() {
    const data = {
      concept: this.form.value['concept'],
      date: this.datePipe.transform(this.form.value['date'], 'yyyy-MM-dd'),
      amount: this.form.value['amount'],
      type: Number.parseFloat(this.form.value['type'])
    }
    return data;
  }

}
