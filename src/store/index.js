import Vue from 'vue';
import Vuex from 'vuex';
import pathify from 'vuex-pathify';

import modules from './modules';

import EnvironmentService from '../services/environment.js';

Vue.use(Vuex);

pathify.options = {
  mapping: 'standard', // map states to store members using the "standard" scheme
  strict: true, // throw an error if the store member cannot be found
  cache: true, // cache generated functions for faster re-use
  deep: true, // allow sub-property access to Vuex stores
};

export default new Vuex.Store({
  modules,
  plugins: [pathify.plugin],
  strict: !EnvironmentService.isProduction
});
