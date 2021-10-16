import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { TitleCasePipe } from '@angular/common';

import { ComponentsModule } from './components/components.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { SinglePageModule } from './pages/single-page/single-page.module';
import { RouterModule, Routes } from '@angular/router';
import { SinglePageComponent } from './pages/single-page/single-page.component';
// import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  // eager
  { path: '', component: HomePageComponent },
  // lazy - import here, not in app.module
  // { path: 'vulgares-guard', redirectTo: 'vulgares', pathMatch: 'full' },
  // { path: 'vulgares', component: SinglePageComponent },
  // { path: 'de-temporada', component: SinglePageComponent },
  // { path: 'populares', component: SinglePageComponent },
  {
    path: '',
    loadChildren: () =>
      import('./pages/single-page/single-page.module').then(
        (m) => m.SinglePageModule
      ),
  },
  // redirects - cascade
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    // pages...
    RouterModule.forRoot(routes),
    ScullyLibModule,
  ],
  providers: [TitleCasePipe], // alows built-in pipes DI
  bootstrap: [AppComponent],
})
export class AppModule {}
