"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scully_1 = require("@scullyio/scully");
const skipGuardPlugin = (route, config = {}) => {
    scully_1.log(`Skip Guard on route "${scully_1.green(route)}"`);
    return Promise.resolve([
    // { route: '/vulgares' }
    ]);
};
const validator = async () => []; // optional
// router plugins
scully_1.registerPlugin('router', 'skipGuard', skipGuardPlugin, validator);
// html, css, js plugins...
// etc...
//# sourceMappingURL=skip-guard.js.map