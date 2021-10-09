import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdiomPageComponent } from './idiom-page/idiom-page.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [IdiomPageComponent, HomePageComponent],
  imports: [CommonModule],
  // exports: [IdiomPageComponent, HomePageComponent],
})
export class PagesModule {}
