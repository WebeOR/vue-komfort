<template>
  <md-dialog
    :md-active.sync="show"
    class="cart">
    <header
      class="md-layout md-layout-nowrap md-alignment-center-space-between">
      <md-dialog-title>Корзина</md-dialog-title>
      <md-button @click="show = false">Закрыть</md-button>
    </header>

    <md-tabs md-dynamic-height>
      <md-tab md-label="Выбранные товары">
        <Checkout-Table />
      </md-tab>

      <md-tab md-label="Оформление">
        <Checkout-Form />
      </md-tab>
    </md-tabs>
  </md-dialog>
</template>

<script>

import { sync } from 'vuex-pathify';

import CheckoutForm  from './CheckoutForm.vue';
import CheckoutTable from './CheckoutTable.vue';

export default {
  name: 'Cart',
  components: {
    CheckoutForm,
    CheckoutTable,
  },

  data: () => ({
  }),

  computed: {
    show: sync('Interface/cartOpened'),
  },
};

</script>

<style lang="scss">

.cart {
  &.md-dialog {
    top: 25%;
  }
  .md-tab {
    padding: 0 0 16px 0;
  }
  .md-dialog-container {
    max-width: initial;
  }
}

</style>
