import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '',
    loadChildren: () =>
      import('./pages/dashboard/dashboard-routing.module').then(
        (m) => m.dashboardRoutes
      ),
  },

  {
    path: '**',
    redirectTo: 'login',
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
