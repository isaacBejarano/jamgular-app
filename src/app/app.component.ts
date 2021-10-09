import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

import { homeSEO } from './data/home-seo';
import { SeoService } from './services/seo.service';
import { RestService } from './services/rest.service';
import { i_Idiom } from './interfaces/express-api';
import { i_State } from './interfaces/state';
import { StoreService } from './services/delta/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  // head
  pageSEO = homeSEO;
  months: Observable<i_Idiom[]> = of([]);
  populars: Observable<i_Idiom[]> = of([]);

  // content
  sub!: Subscription;

  constructor(
    private renderer: Renderer2,
    private SEO: SeoService,
    private REST: RestService,
    private Store: StoreService
  ) {}

  ngOnInit(): void {
    // head
    this.SEO.renderSEOFriendlyHead(this.renderer, this.pageSEO);

    // store
    this.sub = this.Store.state$.subscribe((s: i_State) => {
      // ?save
      if (!s['populares']) {
        this.REST.getCollection('populars').subscribe((res: i_Idiom[]) => {
          this.Store.dispatch('setPopulars', res);
        });
      }

      if (!s['vulgares']) {
        this.REST.getCollection('slangs').subscribe((res: i_Idiom[]) => {
          this.Store.dispatch('setSlangs', res);
        });
      }

      if (!s['deTemporada']) {
        this.REST.getCollection('months').subscribe((res: i_Idiom[]) => {
          this.Store.dispatch('setMonths', res);
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // FIXME: VERIFICA SEO INDEX, no apareces en SERPS:
  // https://search.google.com/search-console/welcome
  // https://blog.dareboost.com/en/2020/05/preload-prefetch-preconnect-resource-hints/
  // FIXME: PRECONECT ANGULAR for PERFORMANCE VITALS: https://web.dev/uses-rel-preconnect/?utm_source=lighthouse&utm_medium=devtools

  // TODO:
  // 2. => add contact and copyright + Tech icons "bilt with Angular, Scully, Node, Express, Firestore, powered by Netlify"
  // 3. => analytics? NEtlify UI or local?
  // 4. => Algolia
}

/*
MINE: node v14.17.0 ,  npm 7.20.6

ENGINE   package: '@angular-devkit/architect@0.1202.3',
10:12:06 PM: npm WARN EBADENGINE   required: {
10:12:06 PM: npm WARN EBADENGINE     node: '^12.14.1 || >=14.0.0',
10:12:06 PM: npm WARN EBADENGINE     npm: '^6.11.0 || ^7.5.6',
10:12:06 PM: npm WARN EBADENGINE     yarn: '>= 1.13.0'
10:12:06 PM: npm WARN EBADENGINE   },
10:12:06 PM: npm WARN EBADENGINE   current: { node: 'v16.11.0', npm: '8.0.0' }
*/
