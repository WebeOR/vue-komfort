import 'babel-polyfill';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import './registerServiceWorker';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);

import VueBus from 'vue-bus';
import VueFilters from 'vue2-filters';
import VueMoment from './assets/js/vue-moment.js'; // забираю кастомную сборку, потому что на NPM косячная

import * as VueSVGIcon from 'vue-svgicon';
import mCheckbox from 'vue-material-checkbox';
import smoothscroll from 'smoothscroll-polyfill';

Vue.use(VueBus);
Vue.use(VueFilters);
Vue.use(VueMoment);
Vue.use(mCheckbox);

Vue.use(VueSVGIcon, {
  tagName: 'icon'
});

// Полифилл для поддержки плавной прокрутки
smoothscroll.polyfill();

// Фильтры
import * as filters from './utils/filters.js';

for (const key in filters) {
  Vue.filter(key, filters[key]);
}

Vue.config.productionTip = false;

new Vue({ router , store , render: h => h(App) }).$mount('#wrapper');
