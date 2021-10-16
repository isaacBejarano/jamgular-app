import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';

export const appRoutes: Routes = [
  // eager
  { path: '', component: HomePageComponent },
  // lazy
  {
    path: '',
    loadChildren: () =>
      import('./pages/single-page/single-page.module').then(
        (m) => m.SinglePageModule
      ),
  },
  // redirects - cascade
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
