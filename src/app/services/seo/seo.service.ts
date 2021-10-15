import { Injectable, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TitleCasePipe } from '@angular/common';

import { HTMLEntitiesPipe } from '@app/pipes/html-entities.pipe';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title,
    private HTMLEntities: HTMLEntitiesPipe,
    private titlecase: TitleCasePipe
  ) {}

  updateMetaData(renderer: Renderer2, metaData: any) {
    // Title
    this.title.setTitle(this.titlecase.transform(<string>metaData.heading));

    // Canonical
    renderer
      .selectRootElement('link[rel=canonical]', true)
      .setAttribute('href', metaData.canonical);

    // Description
    this.meta.updateTag({
      name: 'description',
      content: <string>this.HTMLEntities.transform(metaData.description),
    });

    // Robots
    this.meta.updateTag({
      name: 'robots',
      content:
        <string>metaData.seo.robots.index + ', ' + metaData.seo.robots.follow,
    });

    // KeyWords
    let words = '';

    for (const word of metaData.seo.keywords) {
      words += word + ', ';
    }

    this.meta.updateTag({
      name: 'keywords',
      content: <string>words.substring(0, words.length - 2),
    });

    // Open Graph
    const OpenGraph = this.setOpenGraph(metaData.seo.metas);
    const localeAlternateOG = this.setLocaleAlternateOG(metaData.seo.metas);

    for (const meta of OpenGraph) {
      this.meta.updateTag({
        property: <string>meta.property,
        content: <string>meta.content,
      });
    }

    for (const meta of localeAlternateOG) {
      this.meta.addTag({
        property: <string>meta.property,
        content: <string>meta.content,
      });
    }
  }

  // LIB
  setOpenGraph(metas: any): any[] {
    return [
      // required
      {
        property: 'og:title',
        content: this.titlecase.transform(
          <string>metas.find((m: any) => m.property === 'og:title').content
        ),
      },
      {
        property: 'og:type',
        content: metas.find((m: any) => m.property === 'og:type').content,
      },
      {
        property: 'og:image',
        content: metas.find((m: any) => m.property === 'og:image').content,
      },
      {
        property: 'og:image:type',
        content: metas.find((m: any) => m.property === 'og:image:type').content,
      },
      {
        property: 'og:image:width',
        content: metas.find((m: any) => m.property === 'og:image:width')
          .content,
      },
      {
        property: 'og:image:height',
        content: metas.find((m: any) => m.property === 'og:image:height')
          .content,
      },
      {
        property: 'og:image:alt',
        content: metas.find((m: any) => m.property === 'og:image:alt').content,
      },
      {
        property: 'og:url',
        content: metas.find((m: any) => m.property === 'og:url').content,
      },
      // optional
      {
        property: 'og:description',
        content: metas.find((m: any) => m.property === 'og:description')
          .content,
      },
      {
        property: 'og:site_name',
        content: metas.find((m: any) => m.property === 'og:site_name').content,
      },
      {
        property: 'og:locale',
        content: metas.find((m: any) => m.property === 'og:locale').content,
      },
    ];
  }

  setLocaleAlternateOG(metas: any): any[] {
    return metas.filter((m: any) => m.property === 'og:locale:alternate');
  }
}
