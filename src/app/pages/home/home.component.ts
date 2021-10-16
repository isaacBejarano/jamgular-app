import { Component, OnInit, Renderer2 } from '@angular/core';
import { SinglePageSeoService } from '@app/services/seo/single-page-seo.service';
import { SeoService } from '@app/services/seo/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomePageComponent implements OnInit {
  // head
  heading = 'Inicio';
  slug = '';
  metaSEO: { [i: string]: any } = {};

  constructor(
    private renderer: Renderer2,
    private SEO: SeoService,
    private singlePageSEO: SinglePageSeoService
  ) {}

  ngOnInit(): void {
    // head
    this.singlePageSEO.setSlug = this.slug;
    this.singlePageSEO.setHeading = this.heading;
    this.metaSEO = this.singlePageSEO.genMetaData();

    this.SEO.updateMetaData(this.renderer, this.metaSEO);
  }
}
