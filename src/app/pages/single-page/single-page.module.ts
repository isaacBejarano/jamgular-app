import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SinglePageComponent } from './single-page.component';
import { ComponentsModule } from '@app/components/components.module';
import { singlePageRoutes } from './single-page.routes';



@NgModule({
  declarations: [SinglePageComponent],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(singlePageRoutes)],
  exports: [SinglePageComponent],
})
export class SinglePageModule {}
