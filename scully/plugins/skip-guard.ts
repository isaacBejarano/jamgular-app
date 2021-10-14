import { registerPlugin, log, green, HandledRoute } from '@scullyio/scully';

const skipGuardPlugin = (
  route: string,
  config = {}
): Promise<HandledRoute[]> => {
  log(`Skip Guard on route "${green(route)}"`);
  return Promise.resolve([
    // { route: '/vulgares' }
  ]);
};

const validator = async () => []; // optional

// router plugins
registerPlugin('router', 'skipGuard', skipGuardPlugin, validator);

// html, css, js plugins...
// etc...
