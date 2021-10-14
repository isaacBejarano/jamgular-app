import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';

import { StoreService } from '@app/db/delta/store.service';
import { SeoService } from '@app/services/seo.service';
import { SinglePageSeoService } from '@app/db/single-page-seo.service';
import { SlugOperatorService } from '@app/utils/slug-operator.service';
import { i_State } from '@app/interfaces/state';
import { i_Idiom } from '@app/interfaces/express-api';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-idiom-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss'],
})
export class SinglePageComponent implements OnInit {
  // head
  heading!: string;
  slug!: string;
  metaSEO: { [i: string]: any } = {};

  // content
  idioms: Observable<i_Idiom[]> = of([]);
  sub!: Subscription;

  // TEST on state management
  guard: boolean | undefined;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private SEO: SeoService,
    private Store: StoreService,
    private slugOperator: SlugOperatorService,
    private singlePageSEO: SinglePageSeoService
  ) {
    this.slugOperator.setSlug = this.router.url;
  }

  ngOnInit(): void {
    // TEST on state management
    this.sub = this.Store.state$.pipe(take(1)).subscribe((s: i_State) => {
      this.guard = s.bypassPegi;
    });

    // * head
    this.slug = <string>this.slugOperator.unslash().getSlug;
    this.heading = <string>this.slugOperator.undash().getSlug;

    // metaData instance
    this.singlePageSEO.setSlug = this.slug;
    this.singlePageSEO.setHeading = this.heading;

    this.metaSEO = this.singlePageSEO.genMetaData();
    this.SEO.updateMetaData(this.renderer, this.metaSEO);

    // * body
    // store - read
    this.sub = this.Store.state$.subscribe(
      (s: i_State) => (this.idioms = of(s[this.slug]))
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
