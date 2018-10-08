<template>
  <section
    :id="'e' + Line.id"
    class="product">
    <h3 class="md-display-1">{{ Line.title }}</h3>
    <ul class="md-layout md-gutter md-alignment-top-space-between">
      <Product-Item
        v-for="product in Line.products"
        :key="product.name"
        :Product="product" />
    </ul>
    <p class="md-body-2">{{ Line.description }}</p>
    <component :is="`Ermak${ Line.id }Table`" />
  </section>
</template>

<script>

  import ProductItem from '../../components/ProductItem.vue';

  const Ermak12Table = () => import('./Ermak12Table.vue');
  const Ermak16Table = () => import('./Ermak16Table.vue');
  const Ermak20Table = () => import('./Ermak20Table.vue');
  const Ermak30Table = () => import('./Ermak30Table.vue');

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
    }
  };

</script>
