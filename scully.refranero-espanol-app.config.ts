import { ScullyConfig } from '@scullyio/scully';

import './scully/plugins/skip-guard';

export const config: ScullyConfig = {
  projectName: 'refranero-espanol-app',
  projectRoot: './src',
  outDir: './dist/static',
  routes: {},
  extraRoutes: ['/populares', '/vulgares', '/de-temporada'],
};
