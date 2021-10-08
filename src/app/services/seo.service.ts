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

  /* SEO */
  renderSEOFriendlyHead(renderer: Renderer2, page: any) {
    // Title
    this.title.setTitle(
      this.titlecase.transform(<string>page.title + page.titleEnd)
    );

    // Canonical
    const head = renderer.selectRootElement('head', true);
    const link = renderer.createElement('link');
    renderer.setProperty(link, 'rel', 'canonical');
    renderer.setAttribute(link, 'href', page.domain + page.slug);
    renderer.appendChild(head, link);

    // Description - meta
    this.meta.addTag({
      name: 'description',
      content: <string>this.HTMLEntities.transform(page.description),
    });

    // Robots
    this.meta.addTag({
      name: 'robots',
      content: <string>page.seo.robots.index + ', ' + page.seo.robots.follow,
    });

    // KeyWords
    let words = '';
    for (const word of page.seo.keywords) {
      words += word + ', ';
    }
    this.meta.addTag({
      name: 'keywords',
      content: <string>words.substring(0, words.length - 2),
    });

    // Open Graph
    const openGrpah = this.setOpenGraph(page.seo.metas);

    for (const meta of openGrpah) {
      this.meta.addTag({
        property: meta.property,
        content: meta.content,
      });
    }

    // Robots
    this.meta.addTag({
      name: 'author',
      content: <string>page.author,
    });
  }

  updateSEOFriendlyHead(renderer: Renderer2, page: any) {
    // Title
    this.title.setTitle(
      this.titlecase.transform(<string>page.title + page.titleEnd)
    );

    // Canonical
    renderer
      .selectRootElement('link[rel=canonical]', true)
      .setAttribute('href', page.domain + page.slug);

    // Description
    this.meta.updateTag({
      name: 'description',
      content: <string>this.HTMLEntities.transform(page.description),
    });

    // Robots
    this.meta.updateTag({
      name: 'robots',
      content: <string>page.seo.robots.index + ', ' + page.seo.robots.follow,
    });

    // KeyWords
    let words = '';
    for (const word of page.seo.keywords) {
      words += word + ', ';
    }
    this.meta.addTag({
      name: 'keywords',
      content: <string>words.substring(0, words.length - 2),
    });

    // Open Graph
    const OpenGrpah = this.setOpenGraph(page.seo.metas);

    for (const meta of OpenGrpah) {
      this.meta.updateTag({
        property: <string>meta.property,
        content: <string>meta.content,
      });
    }
  }

  // AUX
  setOpenGraph(metas: any): any[] {
    let metaOG = [
      // required
      {
        property: 'og:title',
        content: metas.find((m: any) => m.property === 'og:title').content,
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

    let localeAlt = metas.filter(
      (m: any) => m.property === 'og:locale:alternate'
    );

    return [...metaOG, ...localeAlt];
  }
}
