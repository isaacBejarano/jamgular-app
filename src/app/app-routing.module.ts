import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SinglePageComponent } from './pages/single-page/single-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'vulgares', component: SinglePageComponent },
  { path: 'de-temporada', component: SinglePageComponent },
  { path: 'populares', component: SinglePageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

// TODO: lazyload

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}