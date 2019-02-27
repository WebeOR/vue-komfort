const namespaced = true;

const state = [];

const getters = {
  productsList: state => {
    const ids = state.map( product => product.id );

    const productList = [];
    const quantities = {};

    ids.forEach( id => {
      quantities[id] = ids.filter( ident => ident === id ).length;
    });

    for (const key in quantities) {
      const product = state.find( product => product.id === key );
      product.quantity = quantities[key];
      productList.push(product);
    }

    return productList;
  },

  quantities: (state, getters) => getters.productsList
    .map( product => product.quantity )
    .reduce(( accumulator , currentValue ) => (accumulator + currentValue), 0 ),

  getProduct: state => id => state.find( product => product.id === id ),
};

const actions = {
  addProduct ({ commit }, product ) {
    commit('ADD_PRODUCT', product);
  },

  removeProduct ({ commit }, product ) {
    commit('REMOVE_PRODUCT', product);
  },

  removeSelected ({ commit }, ids = [] ) {
    ids.forEach( id => commit('REMOVE_SELECTED', id ));
  },
};

const mutations = {
  ADD_PRODUCT (state, product = {}) {
    state.push(product);
  },

  REMOVE_PRODUCT (state , { id = '' }) {
    const index = state.findIndex( product => product.id === id );
    if ( index != -1 ) state.splice(index , 1);
  },

  REMOVE_SELECTED (state , id = '') {
    const quantity = state.map( product => product.id === id ).length;

    for (let i = 0; i < quantity; i++) {
      const index = state.findIndex( product => product.id === id );
      if ( index != -1 ) state.splice(index , 1);
    }
  }
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
