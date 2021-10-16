import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePageComponent } from './single-page.component';
import { ComponentsModule } from '@app/components/components.module';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from '@app/components/modal/modal.component';
import { PegiGuard } from '@app/guards/pegi.guard';

const routes: Routes = [
  {
    path: 'vulgares-guard',
    // component: SinglePageComponent,
    canActivate: [PegiGuard],
  },
  { path: 'vulgares', component: SinglePageComponent },
  { path: 'de-temporada', component: SinglePageComponent },
  { path: 'populares', component: SinglePageComponent },
];

@NgModule({
  declarations: [SinglePageComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SinglePageComponent],
})
export class SinglePageModule {}
