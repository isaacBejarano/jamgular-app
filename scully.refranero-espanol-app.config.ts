import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'refranero-espanol-app',
  outDir: './dist/static',
  routes: {},
  extraRoutes: ['/populares', '/vulgares', '/de-temporada'],
};
