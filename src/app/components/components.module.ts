import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    //
    CommonModule, // directives
    RouterModule, // routerLink
  ],
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
  ],
  exports: [
    //
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ModalComponent,
    // RouterModule,
  ],
})
export class ComponentsModule {}
