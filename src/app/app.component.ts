import { Component, OnInit } from '@angular/core';

import { RestService } from './services/rest.service';
import { StoreService } from './db/delta/store.service';
import { i_Idiom } from './interfaces/express-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private REST: RestService, private Store: StoreService) {}

  ngOnInit(): void {
    // store
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
  // 2. => add contact and copyright + Tech icons "bilt with Angular, Scully, Node, Express, Firestore, powered by Netlify"
  // 3. => analytics? NEtlify UI or local?
  // 4. => Algolia
}

