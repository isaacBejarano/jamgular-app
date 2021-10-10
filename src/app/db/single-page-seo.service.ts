import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class SinglePageSeoService {
  private domain = environment.host;
  private siteName = 'Refranes Españoles';
  private titleEnd = ' | ' + this.siteName;
  private slug = '/'; // home fallback
  private heading = 'Inicio'; // home fallback
  private description!: string;
  private canonical!: string;

  constructor() {}

  // setters + getters
  set setSlug(str: string) {
    this.slug = str;
  }

  set setHeading(str: string) {
    this.heading = str;
  }

  genMetaData(): { [i: string]: any } {
    // populate attr <-> slug && heading
    this.canonical = this.slug ? this.domain + '/' + this.slug : this.domain;
    this.description =
      this.heading !== 'Inicio'
        ? 'Página con los refranes ' +
          this.heading +
          ' más típicos del Refranero Español'
        : 'Página con los refranes más típicos del Refranero Español';

    return {
      author: 'Isaac Bejarano',
      domain: this.domain,
      slug: this.slug,
      heading: this.heading + this.titleEnd,
      canonical: this.canonical,
      description: this.description,
      seo: {
        robots: {
          index: 'index',
          follow: 'follow',
        },
        keywords: [
          'refranes españoles',
          'refranero español',
          this.heading !== 'Inicio'
            ? 'refranes ' + this.heading
            : 'refranes típicos',
          'aprender',
          'juegos',
          'refranes',
          'juego de palabras',
          'juego divertido',
          'diversión',
        ],
        metas: [
          {
            property: 'og:title',
            content: this.heading + this.titleEnd,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            property: 'og:image',
            content: this.domain + '/assets/img/isaac-logo.png',
          },
          {
            property: 'og:image:type',
            content: 'image/png',
          },
          {
            property: 'og:image:width',
            content: '32',
          },
          {
            property: 'og:image:height',
            content: '32',
          },
          {
            property: 'og:image:alt',
            content: 'favicon',
          },
          {
            property: 'og:url',
            content: this.canonical,
          },
          {
            property: 'og:description',
            content: this.description,
          },
          {
            property: 'og:site_name',
            content: this.siteName,
          },
          {
            property: 'og:locale',
            content: 'es_ES',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_AR',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_BO',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_CL',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_CO',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_CR',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_CU',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_DO',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_EC',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_SV',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_GT',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_HN',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_MX',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_NI',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_PA',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_PY',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_PE',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_PR',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_UY',
          },
          {
            property: 'og:locale:alternate',
            content: 'es_VE',
          },
        ],
      },
    };
  }
}
