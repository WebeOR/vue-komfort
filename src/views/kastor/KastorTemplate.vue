<template>
  <section
    :id="Line.id"
    class="product">
    <h3 class="md-display-1">{{ Line.title }}</h3>
    <ul class="md-layout md-gutter md-alignment-top-space-between">
      <Product-Item
        v-for="product in Line.products"
        :key="product.name"
        :Product="product" />
    </ul>

    <p
      v-if="Line.descriptions"
      v-for="( description , key ) in Line.descriptions"
      :key="key">
      {{ description }}
    </p>

    <table
      v-if="Line.table"
      v-html="Line.table"
      border="1"
      cellspacing="0"
      cellpadding="0"
      class="product-table">
    </table>

  </section>
</template>

<script>

  import ProductItem from '../../components/ProductItem.vue';

  export default {
    name: 'Kastor-Template',
    components: { ProductItem },
    props: {
      'Line': {
        type: Object,
        required: true
      }
    }
  };

</script>
