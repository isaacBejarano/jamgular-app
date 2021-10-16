import { Routes } from '@angular/router';
import { PegiGuard } from '@app/guards/pegi.guard';
import { SinglePageComponent } from './single-page.component';

export const singlePageRoutes: Routes = [
  { path: 'vulgares-guard', canActivate: [PegiGuard] },
  { path: 'vulgares', component: SinglePageComponent },
  { path: 'de-temporada', component: SinglePageComponent },
  { path: 'populares', component: SinglePageComponent },
];
