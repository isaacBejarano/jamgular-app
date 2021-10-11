import { Component, OnInit } from '@angular/core';

import { RestService } from './services/rest.service';
import { StoreService } from './db/delta/store.service';
import { SlugOperatorService } from './utils/slug-operator.service';
import { i_Idiom } from './interfaces/express-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // data
  title = 'refranes españoles';
  menu: { [i: string]: any } = {
    home: {
      name: 'inicio',
      children: [],
    },
    idioms: {
      name: 'refranes',
      children: [
        ['/vulgares', ''],
        ['/de-temporada', ''],
        ['/populares', ''],
      ],
    },
  };
  footer = {
    copy: 'Copyright © 2021-2022 Isaac Bejarano',
    made: ['Angular', 'Scully'],
    powered: 'Netlify',
  };

  // render
  home = this.menu.home.name;
  idioms = this.menu.idioms;

  constructor(
    private REST: RestService,
    private Store: StoreService,
    private slugOp: SlugOperatorService
  ) {}

  ngOnInit(): void {
    // MENU
    this.idioms.children.forEach((idiom: string, i: number) => {
      this.slugOp.setSlug = idiom[0];

      // order matters!
      this.idioms.children[i][0] = this.slugOp.unslash().getSlug;
      this.idioms.children[i][1] = this.slugOp.undash().getSlug;
    });

    // STORE
    this.REST.getCollection('populars').subscribe((res: i_Idiom[]) => {
      this.Store.dispatch('setPopulars', res);
    });

    this.REST.getCollection('slangs').subscribe((res: i_Idiom[]) => {
      this.Store.dispatch('setSlangs', res);
    });

    this.REST.getCollection('months').subscribe((res: i_Idiom[]) => {
      this.Store.dispatch('setMonths', res);
    });
    // ...
  }

  // TODO:
  // 1. => copyriigt + Tech icons "bilt with Angular, Scully, Node, Express, Firestore, powered by Netlify"
  // 2. => lazy laod modules
  // 3. => add contact page
  // 4. => analytics: NTL UI vs local
}
