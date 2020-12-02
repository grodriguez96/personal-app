import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalDataService } from 'src/app/services/localData/local-data.service';
import { ApiService } from 'src/app/services/api/api.service';
import { Transaction } from 'src/app/interfaces/transaction/transaction';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  mobileQuery: MediaQueryList;
  isLoading = true;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: Router, private authSvc: AuthService, private localData: LocalDataService, private api: ApiService, private datePipe: DatePipe) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.getUserEmail()
      .then(email => {

        this.localData.email = email;
        this.api.getTransactions(email).subscribe(result => {

          if (result) {
            this.localData.data = result.map(this.change);
            this.isLoading = false;
          }
          this.isLoading = false;
        })
      });
  }

  change = (trans: Transaction) => {
    const { concept, amount, created_date, transaction_date, id, type } = trans
    const newTrans = {
      concept, amount, created_date, id, type,
      transaction_date: this.datePipe.transform(transaction_date, 'yyyy-MM-dd')
    }
    return newTrans;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  /** Logout user session and go to index page. */
  async logOut() {
    await this.authSvc.logOut()
    this.route.navigate(['/']);
  }

  async getUserEmail(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.authSvc.afAuth.onAuthStateChanged((user) => resolve(user.email));
    });
  }


}
