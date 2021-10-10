import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './home-page/home-page.component';
import { SinglePageComponent } from './single-page/single-page.component';

@NgModule({
  declarations: [HomePageComponent, SinglePageComponent],
  imports: [CommonModule],
})
export class PagesModule {}
