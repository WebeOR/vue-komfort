<template>
  <section
    :id="'e' + Line.id"
    class="product">
    <h3 class="md-display-1">{{ Line.title }}</h3>
    <ul class="md-layout md-alignment-top-space-around">
      <Product-Item
        v-for="product in Line.products"
        :key="product.name"
        :Product="product"
        :class="{ 'md-size-30': Line.products.length >= 3 }"
        />
    </ul>
    <p class="md-body-2" v-html="Line.description"></p>

    <component :is="`Ermak${ Line.id }Table`" />
  </section>
</template>

<script>

import ProductItem from '../../components/ProductItem.vue';

const Ermak12Table = async () => await import('./Ermak12Table.vue');
const Ermak16Table = async () => await import('./Ermak16Table.vue');
const Ermak20Table = async () => await import('./Ermak20Table.vue');
const Ermak30Table = async () => await import('./Ermak30Table.vue');

export default {
  name: 'Ermak-Section',
  components: {
    ProductItem,
    Ermak12Table,
    Ermak16Table,
    Ermak20Table,
    Ermak30Table
  },

  props: {
    'Line': {
      type: Object,
      required: true
    }
  },
};

</script>
