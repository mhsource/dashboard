import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {AuthGuard} from './shared/services/auth.guard';

const routes: Routes = [
  {
    path: 'tables',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule)
  },
  {
    path: 'procedures',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/procedures/procedures.module').then(m => m.ProceduresModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
