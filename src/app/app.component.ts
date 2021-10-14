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
  // 4. => analytics: NTL UI vs local + (read Ad Sense)
  // 5. Make Game
  // 6. KOA API =>Authenticate HTTP CALLS to Firestore

  // 7. Rebuild portfolio + deploy under jamstack (on ntl + redirect DNS)
  // 8. Cancel Account in IONOS. Kekep both domains though

  // 9. Back to TODO: list from jmastack explorers
  // 10. Headless DB..., CMS... etc
}
