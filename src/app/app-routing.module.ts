import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {AuthGuard} from "./core/guards/auth.guard";
import {NoAuthGuard} from "./core/guards/no-auth.guard";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () => import('./core/system/auth/auth.module').then(m => m.AuthModule),
        canLoad: [NoAuthGuard],
        canActivateChild: [NoAuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./core/system/dashboard/dashboard.module').then(m => m.DashboardModule),
        canLoad: [AuthGuard],
        canActivateChild: [AuthGuard]
      }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
