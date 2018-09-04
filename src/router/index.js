import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import routes from './routes.js';

import { metaTagsInjector } from './guards.js';

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: '_active',
  linkExactActiveClass: '_exact-active',
  routes
});

router.beforeEach( metaTagsInjector );

export default router;
