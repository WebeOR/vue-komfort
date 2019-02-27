import { make } from 'vuex-pathify';

const namespaced = true;

const state = {
  cartOpened: false,
};

const getters = {};

const actions = {
  ...make.actions(state),
};

const mutations = {
  ...make.mutations(state),
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
