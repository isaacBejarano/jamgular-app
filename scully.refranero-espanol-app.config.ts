import { ScullyConfig } from '@scullyio/scully';

import './scully/plugins/skip-guard';

export const config: ScullyConfig = {
  projectName: 'refranero-espanol-app',
  projectRoot: './src',
  outDir: './dist/static',
  routes: {
    // '/vulgares': { type: 'skipGuard' },
  },
  extraRoutes: ['/populares', '/de-temporada', '/vulgares'],
};
