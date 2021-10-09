import { environment } from '@env/environment';

const domain = environment.host;
const siteName = 'Refranes Españoles';
const titleEnd = ' | ' + siteName;

export function idiomsSEO(category: string): object {
  return {
    author: 'Isaac Bejarano',
    domain: domain,
    slug: '',
    title: 'Inicio',
    titleEnd: titleEnd,
    description:
      'Página con los refranes ' +
      category +
      ' más típicos del Refranero Español',
    seo: {
      robots: {
        index: 'index',
        follow: 'follow',
      },
      keywords: [
        'refranes españoles',
        'refranes ' + category,
        'refranero español',
        'web app',
        'divertido',
      ],
      metas: [
        {
          property: 'og:title',
          content: 'Refranes ' + category + titleEnd,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: domain + '/assets/img/isaac-logo.png',
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
          content: 'refranesespanol.es favicon',
        },
        {
          property: 'og:url',
          content: domain + '/' + category,
        },
        {
          property: 'og:description',
          content:
            'Página con los refranes ' +
            category +
            ' más típicos del Refranero Español',
        },
        {
          property: 'og:site_name',
          content: siteName,
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