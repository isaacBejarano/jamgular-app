import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { TitleCasePipe } from '@angular/common';

import { ComponentsModule } from './components/components.module';
import { appRoutes } from './app.routes';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    // pages...
    RouterModule.forRoot(appRoutes),
    ScullyLibModule,
  ],
  providers: [TitleCasePipe], // alows built-in pipes DI
  bootstrap: [AppComponent],
})
export class AppModule {}
