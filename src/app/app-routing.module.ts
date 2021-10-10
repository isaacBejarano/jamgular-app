import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { IdiomPageComponent } from './pages/idiom-page/idiom-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'vulgares', component: IdiomPageComponent },
  { path: 'de-temporada', component: IdiomPageComponent },
  { path: 'populares', component: IdiomPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

// TODO: lazyload

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}