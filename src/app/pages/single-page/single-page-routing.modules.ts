import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SinglePageComponent } from './single-page.component';
import { PegiGuard } from '@app/guards/pegi.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'vulgares-guard',
        canActivate: [PegiGuard],
      },
      { path: 'vulgares', component: SinglePageComponent },
      { path: 'de-temporada', component: SinglePageComponent },
      { path: 'populares', component: SinglePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class SinglePageRoutingModule {}
