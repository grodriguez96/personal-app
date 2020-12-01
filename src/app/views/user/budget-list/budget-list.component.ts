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

  displayedColumns: string[] = ['select', 'concept', 'date', 'amount', 'type'];
  selection: Transaction;
  dataSource: MatTableDataSource<Transaction>;
  isDataEmpty = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, private localData: LocalDataService) {
    this.dataSource = new MatTableDataSource(this.localData.data);
    this.isDataEmpty = this.isEmpty();

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
    /** Open dialog to create new transaction. */
    const dialogRef = this.dialog.open(CreateTransactionComponent);

    /**Wait for dialog response, that could be a Json of the transaction or undefined. */
    dialogRef.afterClosed().subscribe((result: Transaction) => {

      /** If response is a Json. */
      if (result != undefined) {

        /**The new transaction is inserted into the dataSource. */
        this.dataSource.data.push(result);

        /**Finally updates dataSorce and localData. */
        this.updateDatas();

      }
    });
  }


  updateTransaction(): void {
    /** The steps are similar to 'createTransaction'. */
    /** Pass the value of selected row. */
    const dialogRef = this.dialog.open(UpdateTransactionComponent, {
      data: this.selection,
    });

    dialogRef.afterClosed().subscribe((result: Transaction) => {
      if (result != undefined) {

        /** Search into dataSource the index of array where id transaction is equal. */
        const index = this.dataSource.data.findIndex(transaction => transaction.id == result.id)

        /** Change the value into that index for update value. */
        this.dataSource.data[index] = result;
        this.updateDatas();
      }
    });
  }

  deleteTransaction() {
    /** The steps are similar to 'createTransaction' and 'updateTransaction'. */
    const dialogRef = this.dialog.open(DeleteTransactionComponent, {
      data: this.selection,
    });

    dialogRef.afterClosed().subscribe((result: Transaction) => {
      if (result != undefined) {
        const index = this.dataSource.data.findIndex(obj => obj.id == result.id);
        /** Delete the value into that index. */
        this.dataSource.data.splice(index, 1);
        this.isDataEmpty = this.isEmpty();
        this.updateDatas();

      }
    });
  }

  /** Check if dataSource is empty. */
  isEmpty() {
    return (this.dataSource.data.length > 0) ? false : true;
  }

  /** Update localData whith dataSource, then reprint table. */
  updateDatas(): void {
    this.selection = null;
    this.localData.data = this.dataSource.data;
    this.dataSource._updateChangeSubscription();
  }

  /** Save value of selected row */
  rowSelect(row: Transaction) {
    this.selection = row;
  }

}
