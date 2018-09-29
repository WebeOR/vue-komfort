<template>
  <li class="product-item">
    <h6 class="product-item__title">{{ Product.name }}</h6>
    <ul
      v-if="Product.images && Product.images.length"
      flickity
      class="product-item__slider-container">
      <li
        v-for="image in Product.images" :key="image"
        class="carousel-cell">
        <img :src="image" :alt="Product.name" class="product-item__image" />
      </li>
    </ul>
    <div
      v-else-if="Product.image && Product.image.length"
      class="product-item__image-container">
      <img :src="Product.image" :alt="Product.name" class="product-item__image" />
    </div>
    <a
      v-if="Product.instruction && Product.instruction.length"
      :href="Product.instruction"
      target="_blank"
      class="product-item__link"
      ripple-light>Инструкция по эксплуатации</a>
    <span class="product-item__price">{{ Product.price.value | currency('₽', 0 , currencyOptions ) }}</span>
  </li>
</template>

<script>

  export default {
    name: 'Product-Item',
    props: {
      'Product': {
        type: Object,
        required: true
      }
    },
    data: () => ({
      currencyOptions: {
        symbolOnLeft: false,
        spaceBetweenAmountAndSymbol: true,
        thousandsSeparator: ' '
      }
    })
  };

</script>

<style lang="scss">

  @import '../stylesheets/partials/_variables.scss';
  @import '../stylesheets/partials/_mixins.scss';

  $height: 250px;
  $border-color: #dbdbdb;

  .product-item {
    flex: 1 1 24%;
    margin: 0.5vh;
    border-radius: 2px;
    @include MDShadow-1;
    @include transition(.2s);
    &:hover {
      @include MDShadow-2;
    }
    &__title {
      display: block;
      text-align: center;
      width: 100%;
      padding: 10px;
      font-size: 1.5rem;
      height: 48px;
      color: $white;
      background-color: lighten($red, 5%);
    }
    &__image-container {
      justify-content: center;
    }
    &__slider-container {
      max-width: 50%;
      height: $height;
    }
    &__image {
      height: $height;
      &._half {
        max-width: 100%;
      }
      &._wide {
        width: 100%;
      }
    }
    &__link {
      display: block;
      padding: 10px 15px;
      text-align: center;
      font-size: 1rem;
      color: $asphalt
    }
    &__price {
      display: block;
      width: 100%;
      height: 48px;
      text-align: center;
      font-size: 1.5rem;
      line-height: 48px;
      color: $white;
      background-color: lighten($red, 5%);
    }

    .carousel-cell {
      display: block;
      text-align: center;
      width: 100%;
      height: 100%;
    }

    .carousel-cell-image {
      display: block;
      max-width: 100%;
      max-height: 100%;
      margin: 0 auto;
      opacity: 0;
      background-size: cover;
      transition: opacity .4s ease-in-out;
      &.flickity-lazyloaded,
      &.flickity-lazyerror {
        opacity: 1;
      }
    }

    .flickity-page-dots {
      bottom: 2%;
      .dot {
        opacity: 0.8;
        size: 12px;
        background: transparent;
        border: 2px solid $red;
        @include transition(.3s);
        @include MDShadow-2;
        &:hover {
          opacity: 1;
        }
        &.is-selected {
          background: $red;
          box-shadow: 0 0 5px rgba($red, .5);
        }
      }
    }
  }

</style>
