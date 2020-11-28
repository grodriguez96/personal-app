import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Transaction } from 'src/app/interfaces/transaction/transaction';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateTransactionComponent } from 'src/app/dialogs/create-transaction/create-transaction.component';
import { UpdateTransactionComponent } from 'src/app/dialogs/update-transaction/update-transaction.component';
import { DeleteTransactionComponent } from 'src/app/dialogs/delete-transaction/delete-transaction.component';
import { LocalDataService } from 'src/app/services/localData/local-data.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements AfterViewInit {

  displayedColumns: string[] = ['concept', 'date', 'amount', 'type', 'edit', 'delete'];
  dataSource: MatTableDataSource<Transaction>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private localData: LocalDataService) {
    this.dataSource = new MatTableDataSource(this.localData.data);

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

  updateDatas(): void {
    this.localData.data = this.dataSource.data;
    this.dataSource._updateChangeSubscription();
  }

  createTransaction(): void {
    const dialogRef = this.dialog.open(CreateTransactionComponent);

    dialogRef.afterClosed().subscribe((result: Transaction) => {

      if (result != undefined) {
        this.dataSource.data.push(result);
        this.updateDatas();
      }

    });
  }

  updateTransaction(row: Transaction): void {
    const dialogRef = this.dialog.open(UpdateTransactionComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe((result: Transaction) => {
      if (result != undefined) {
        const index = this.dataSource.data.findIndex(obj => obj.id == result.id)
        this.dataSource.data[index] = result;
        this.updateDatas();
      }
    });
  }

  deleteTransaction(row: Transaction) {
    const dialogRef = this.dialog.open(DeleteTransactionComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe((result: Transaction) => {
      if (result != undefined) {
        const index = this.dataSource.data.findIndex(obj => obj.id == result.id);
        this.dataSource.data.splice(index, 1);
        this.updateDatas();
      }
    });
  }

}
