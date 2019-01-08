<template>
  <section
    :id="Line.id"
    class="product">

    <md-card>
      <md-card-header>
        <h3 class="md-title">{{ Line.title }}</h3>
      </md-card-header>
      <md-card-content>
        <div class="md-layout md-alignment-top-space-between">
          <img
            v-if="Line.image"
            :src="Line.image"
            :alt="Line.title"
            class="md-layout-item md-size-40"
            style="object-fit:contain" />
          <slider
            v-if="Line.images"
            ref="slider"
            :options="options"
            class="md-layout-item md-size-50">
            <slideritem
              v-for="( image , index ) in Line.images"
              :key="index">
              <img
                :key="index"
                :src="image"
                :alt="Line.title"
                style="object-fit:contain" />
            </slideritem>
            <div slot="loading">loading...</div>
          </slider>
          <div
            v-if="Line.characteristics && Line.characteristics.length"
            class="md-layout-item md-size-50">
            <md-list>
              <md-subheader>Особенности и преимущества:</md-subheader>
              <md-list-item
                v-for="( characteristic , key ) in Line.characteristics"
                :key="key">
                {{ characteristic }}
              </md-list-item>
            </md-list>
          </div>
        </div>

      <div v-if="Line.descriptions">
        <p
          v-for="( description , key ) in Line.descriptions"
          :key="key">
          {{ description }}
        </p>
      </div>

        <p class="md-body-2">{{ Line.description }}</p>
      </md-card-content>
      <md-card-actions>
        <md-button
          v-for="( doc , index ) in Line.docs"
          :key="index"
          :href="doc"
          target="_blank"
          rel="nofollow"
          class="md-raised md-accent">
          Документация
        </md-button>
      </md-card-actions>
    </md-card>

    <table
      v-if="Line.table"
      v-html="Line.table"
      border="1"
      cellspacing="0"
      cellpadding="0"
      class="product-table">
    </table>

    <md-divider />

  </section>
</template>

<script>

  import { slider, slideritem } from 'vue-concise-slider';

  export default {
    name: 'NMK-Template',
    components: {
      slider,
      slideritem
    },
    props: {
      'Line': {
        type: Object,
        required: true
      }
    },
    data: () => ({
      options: {
        currentPage: 0,
        thresholdDistance: 100,
        thresholdTime: 350,
        autoplay: 10000,
        loop: true,
        loopedSlides: 1,
        slidesToScroll: 1,
        timingFunction: 'ease',
        speed: 300
      }
    }),
    mounted () {
      this.$nextTick( () => {

      });
    }
  };

</script>
