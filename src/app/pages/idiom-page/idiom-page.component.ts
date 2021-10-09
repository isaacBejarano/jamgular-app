import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';

import { StoreService } from '@app/services/delta/store.service';
import { SeoService } from '@app/services/seo.service';
import { idiomsSEO } from '@app/data/single-page-seo';
import { i_State } from '@app/interfaces/state';
import { SlugOperatorService } from '@app/utils/slug-operator.service';
import { i_Idiom } from '@app/interfaces/express-api';

@Component({
  selector: 'app-idiom-page',
  templateUrl: './idiom-page.component.html',
  styleUrls: ['./idiom-page.component.scss'],
})
export class IdiomPageComponent implements OnInit {
  // head
  idiomsSEO = idiomsSEO('vulgares');

  // content
  title!: string;
  slug: string;
  idioms: Observable<i_Idiom[]> = of([]);
  sub!: Subscription;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private SEO: SeoService,
    private Store: StoreService,
    private slugOperator: SlugOperatorService
  ) {
    this.slugOperator.setSlug = this.router.url;
    this.slug = this.slugOperator.unslash().getSlug;
  }

  ngOnInit(): void {
    // * head
    this.SEO.renderSEOFriendlyHead(this.renderer, this.idiomsSEO); // SEO // FIXME: function not workin

    // * body
    this.title = this.slugOperator.undash().unslash().getSlug; // title

    // store - read
    this.sub = this.Store.state$.subscribe(
      (s: i_State) => (this.idioms = of(s[this.slug]))
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
