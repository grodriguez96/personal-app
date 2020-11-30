import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./views/user/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./views/auth/auth/auth.module').then(m => m.AuthModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
