<template>
  <md-card
    md-with-hover
    class="product-item md-layout-item"
    style="margin-bottom:20px">
    <md-card-media>
      <Preview
        :src="Product.image"
        :alt="Product.name"
        />
    </md-card-media>

    <md-card-header>
      <div class="md-title md-product-card__title">{{ Product.name }}</div>
    </md-card-header>

    <md-card-expand>
      <md-card-actions md-alignment="space-between">
        <md-button class="md-raised md-accent">Заказать</md-button>

        <md-card-expand-trigger
          v-if="Product.instruction && Product.instruction.length">
          <md-button>Дополнительно</md-button>
        </md-card-expand-trigger>
      </md-card-actions>

      <md-card-expand-content>
        <md-card-content>
          <md-button
            v-if="Product.instruction && Product.instruction.length"
            :href="Product.instruction"
            target="_blank"
            class="md-product-card__link">Инструкция по эксплуатации</md-button>
        </md-card-content>
      </md-card-expand-content>
    </md-card-expand>
  </md-card>
</template>

<script>

import Preview from '../components/Preview.vue';

export default {
  name: 'Product-Item',
  components: {
    Preview,
  },

  props: {
    'Product': {
      type: Object,
      required: true
    }
  },
};

</script>

<style lang="scss">

@import '../stylesheets/partials/_layout.scss';

.product-item {
  @include MQ(xsmall) {
    min-width: 100% !important;
    max-width: 100% !important;
    flex: 0 1 100% !important;
  }
}

</style>
