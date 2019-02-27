<template>
  <swiper
    v-if="slides && slides.length"
    :options="swiperOption"
    class="md-layout-item md-size-50 md-small-size-100">
    <swiper-slide
      v-for="( slide , index ) in slides"
      :key="index">
      <Preview
        :src="slide"
        :alt="title"
        />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>

import 'swiper/dist/css/swiper.css';

import { swiper, swiperSlide } from 'vue-awesome-swiper';

import Preview from './Preview.vue';

export default {
  name: 'Slider',
  components: {
    swiper,
    swiperSlide,
    Preview,
  },

  props: {
    slides: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    noPreview: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    swiperOption: {
      grabCursor: true,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    },
  }),
};

</script>
