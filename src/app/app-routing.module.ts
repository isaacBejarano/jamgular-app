import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  // eager
  { path: '', component: HomePageComponent },
  // lazy - import here, not in app.module
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
