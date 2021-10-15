import { Component, OnInit } from '@angular/core';

import { RestService } from './services/rest.service';
import { StoreService } from './data/generator/store.service';
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

  // FIXME: October

  // TODO: REFRANERO
  // 1. => analytics: NTL UI vs local + (read Ad Sense)
  // 2. KOA API => Authenticate HTTP CALLS to Firestore
  // 3. Make Game
  // 4. Ad Sense
  // 5. donations "pay me a beer" (paypal snippet)

  // TODO: MONTPICOLIS
  // 1. Links to Dropshipping Website
  // 2. TERRABIT DNS redirects -> NTL Manual Deploy

  // TODO: PORTFOIO
  // 1. Rebuild portfolio (migrate data to Firebase)
  // 2. Add MontPicolis XP
  // 3. Add Refranero Project
  // 4. Redirect DS to NTL
  // 5. CD/CI deploy to NTL
  // 8. Cancel Account in IONOS. Keekp both domains though

  // FIXME: November

  // TODO: Jamstack Explorers
  // 1. Angular
  // 2. Lambda Fn
  // 3. Headless DB...
  // 4. Netlify CMS..., Sanity, Strapi, etc...

  // TODO: REFRANERO v.2.0.
  // 6. Add Donations via Stripe

  // TODO: FIGMA RESUMEE --> 1 page
}
