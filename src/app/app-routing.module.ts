import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './views/personal/index/index.component';
import { VerificationComponent } from './views/personal/verification/verification.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'verification',
    component: VerificationComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./views/user/user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
