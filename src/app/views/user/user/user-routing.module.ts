import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BudgetListComponent } from '../budget-list/budget-list.component';

import { UserComponent } from './user.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [{
    path: 'budget-list',
    component: BudgetListComponent,
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
