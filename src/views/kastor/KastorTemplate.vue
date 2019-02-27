<template>
  <section
    :id="Line.id"
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

    <div v-if="Line.descriptions && Line.descriptions.length" class="md-tab">
      <md-card-content
        v-for="( description , key ) in Line.descriptions"
        :key="key"
        v-html="description">
      </md-card-content>
    </div>

    <table
      v-if="Line.table"
      v-html="Line.table"
      border="1"
      cellspacing="0"
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
