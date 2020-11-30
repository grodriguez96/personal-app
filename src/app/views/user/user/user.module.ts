import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

/** Components */
import { UserComponent } from './user.component';
import { BudgetListComponent } from './../../user/budget-list/budget-list.component'
import { CreateTransactionComponent } from '../../../dialogs/create-transaction/create-transaction.component';
import { UpdateTransactionComponent } from '../../../dialogs/update-transaction/update-transaction.component';
import { DeleteTransactionComponent } from '../../../dialogs/delete-transaction/delete-transaction.component';
import { HomeComponent } from '../home/home.component';



/** Angular Material */
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [UserComponent, BudgetListComponent, CreateTransactionComponent, UpdateTransactionComponent, DeleteTransactionComponent, HomeComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,

  ],
  providers: [
    MatDatepickerModule,
    DatePipe
  ]
})
export class UserModule { }
