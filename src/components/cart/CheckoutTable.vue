<template>
  <md-table
    ref="table"
    v-model="ProductsList"
    class="checkout-table">
    <md-table-toolbar>
      <h3 class="md-title">Управление товарами</h3>
    </md-table-toolbar>
    <md-table-toolbar slot="md-table-alternate-header" slot-scope="{ count }">
      <div class="md-toolbar-section-start">{{ getAlternateLabel(count) }}</div>

      <div class="md-toolbar-section-end">
        <md-button
          @click="removeSelected"
          class="md-icon-button">
          <md-icon>delete</md-icon>
        </md-button>
      </div>
    </md-table-toolbar>

    <md-table-row
      slot="md-table-row"
      slot-scope="{ item }"
      md-selectable="multiple"
      md-auto-select>
      <md-table-cell md-label="Изображение:">
        <img
          :src="item.image || item.images[0]"
          :alt="item.title"
          class="checkout-table__picture"
          />
      </md-table-cell>
      <md-table-cell md-label="Наименование:">{{ item.title }}</md-table-cell>
      <md-table-cell md-label="Стоимость:">{{ item.price.value | currencyFormat(item.price.currency) }}</md-table-cell>
      <md-table-cell md-label="Количество:" class="checkout-table__quantity">
        <md-button
          @click.stop="callCartRemoveProduct(item)"
          class="md-icon-button md-dense">
          <md-icon>remove</md-icon>
        </md-button>
        {{ item.quantity }}
        <md-button
          @click.stop="callCartAddProduct(item)"
          class="md-icon-button md-dense">
          <md-icon>add</md-icon>
        </md-button>
      </md-table-cell>
      <md-table-cell md-label="Cумма:">
        <animated-number
          :value="item.quantity * item.price.value"
          :formatValue="format"
          :duration="700"
        />
      </md-table-cell>
    </md-table-row>
  </md-table>
</template>

<script>

import { get , call , sync } from 'vuex-pathify';
import AnimatedNumber        from 'animated-number-vue';

import { currencyFormat } from '../../utils/filters.js';

export default {
  name: 'Checkout-Table',
  components: {
    AnimatedNumber,
  },

  data: () => ({
    selected: [],
  }),

  computed: {
    ProductsList: get('Cart/productsList'),
    Quantities:   get('Cart/quantities'),
    cartOpened:   sync('Interface/cartOpened'),
  },

  watch: {
    'ProductsList.length' (value) {
      value == 0 ? this.cartOpened = false : false;
    }
  },

  methods: {
    callCartRemoveSelected: call('Cart/removeSelected'),
    callCartAddProduct:     call('Cart/addProduct'),
    callCartRemoveProduct:  call('Cart/removeProduct'),

    onSelect (items) {
      items.length
        ? this.selected = items.map( item => item.id )
        : this.selected = [];
    },

    removeSelected () {
      this.callCartRemoveSelected(this.selected);
    },

    getAlternateLabel (count) {
      return `${count} товар выбран`;
    },

    format (value) {
      return currencyFormat(value);
    },
  },

  mounted () {
    this.$nextTick( () => {
      const tableSelectedItems = '$refs.table.MdTable.selectedItems';
      this.$watch(tableSelectedItems , this.onSelect);
    })
  },
};

</script>

<style lang="scss">

.checkout-table {
  &__picture {
    width: 48px;
  }
  &__quantity {
    .md-table-cell-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 40px 6px 8px;
    }
  }
  .md-table-row {
    min-height: 64px;
    height: 64px;
  }
  .md-toolbar {
    padding: 0 24px;
  }
}

</style>
