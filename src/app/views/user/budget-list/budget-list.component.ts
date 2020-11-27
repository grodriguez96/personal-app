import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Transaction, Type } from 'src/app/interfaces/transaction/transaction';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateTransactionComponent } from 'src/app/dialogs/create-transaction/create-transaction.component';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements AfterViewInit {

  data: Transaction[] = [
    { id: 1, concept: "Pago de netflix", date: "2001-08-23", amount: 2.5, type: Type.DEPOSIT },
    { id: 2, concept: "Pago de cine", date: "2002-07-05", amount: 0.5, type: Type.WITHDRAWALS },
    { id: 3, concept: "Pago de Alquiler", date: "2002-04-12", amount: 20, type: Type.WITHDRAWALS },
    { id: 4, concept: "Sueldo", date: "2003-06-20", amount: 50, type: Type.DEPOSIT },
    { id: 5, concept: "Bono de navidad", date: "2000-11-14", amount: 5, type: Type.DEPOSIT },
    { id: 6, concept: "Pago de ABL", date: "2011-07-14", amount: 200, type: Type.WITHDRAWALS },
  ]

  displayedColumns: string[] = ['concept', 'date', 'amount', 'type', 'edit', 'delete'];
  dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.data);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator._intl.itemsPerPageLabel = "transacciones por página";
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createTransaction(): void {
    const dialogRef = this.dialog.open(CreateTransactionComponent);

    dialogRef.afterClosed().subscribe((result: Transaction) => {

      if (result != undefined) {
        this.dataSource.data.push(result);
        this.dataSource._updateChangeSubscription();
      }

    });
  }

}
