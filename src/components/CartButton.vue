<template>
  <md-badge
    :md-content="CartQuantities"
    md-dense
    class="md-primary">
    <md-button
      @click="cartOpened = !cartOpened"
      :disabled="CartQuantities == 0"
      :class="computedClassList"
      style="margin:0">
      <slot></slot>
    </md-button>
  </md-badge>
</template>

<script>

import { get , sync } from 'vuex-pathify';

export default {
  name: 'Toolbar-Cart-Button',

  data: () => ({
    cardQuantityChanged: false,
  }),

  computed: {
    CartQuantities: get ('Cart/quantities'),
    cartOpened:     sync('Interface/cartOpened'),

    computedClassList () {
      return [
        'cart-button',
        'md-accent',
        'md-raised',
        {'_clicked': this.cardQuantityChanged }
      ];
    },
  },

  watch: {
    'CartQuantities' () {
      this.cardQuantityChanged = true;
      window.setTimeout(() => this.cardQuantityChanged = false , 300);
    }
  },
};

</script>

<style lang="scss">

.cart-button {
  & + .md-badge {
    transform-origin: center;
    transition: transform .3s ease-in;
  }
  &._clicked {
    & + .md-badge {
      transform: scale(1.75);
    }
  }
}

</style>
