import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePageRoutingModule } from './single-page-routing.modules';
import { SinglePageComponent } from './single-page.component';

@NgModule({
  imports: [CommonModule, SinglePageRoutingModule],
  declarations: [SinglePageComponent],
  exports: [],
})
export class SinglePageModule {}

// FIXME: https://stackblitz.com/edit/angular-lazy-loading-with-complex-module-hierarchy-eg
