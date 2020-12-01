import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { IndexComponent } from './views/personal/index/index.component';
import { NotFoundComponent } from './views/personal/not-found/not-found.component';
import { VerificationComponent } from './views/personal/verification/verification.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'verification',
    component: VerificationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./views/user/user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
