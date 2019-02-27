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
          <Preview
            :src="Line.image"
            :alt="Line.title"
            class="md-size-40"
            />
          <Slider
            :slides="Line.images"
            :title="Line.title"
            />
          <div
            v-if="Line.characteristics && Line.characteristics.length"
            class="md-layout-item">
            <md-list>
              <md-subheader>Особенности и преимущества:</md-subheader>
              <md-list-item
                v-for="( characteristic , key ) in Line.characteristics"
                :key="key">
                <md-card-content>{{ characteristic }}</md-card-content>
              </md-list-item>
            </md-list>
          </div>
        </div>

        <div v-if="Line.descriptions && Line.descriptions.length" class="md-tab">
          <md-card-content
            v-for="( description , key ) in Line.descriptions"
            :key="key"
            v-html="description">
          </md-card-content>
        </div>

        <p class="md-body-2" v-html="Line.description"></p>
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

    <div
      v-if="Line.banner"
      class="md-layout md-gutter md-alignment-center-center">
      <md-card>
        <img
          :src="Line.banner"
          :alt="Line.title" />
      </md-card>
    </div>

    <md-table
      v-if="Line.table"
      md-card
      class="product-table">
      <md-table-row>
        <md-table-head
          v-for="item in Line.table.head"
          :key="item">
          {{ item }}
        </md-table-head>
      </md-table-row>
      <md-table-row
        v-for="( row , index ) in Line.table.body"
        :key="index">
        <md-table-cell
          v-for="( cell , index ) in row"
          :key="index"
          v-html="cell">
        </md-table-cell>
      </md-table-row>
    </md-table>

    <md-divider />
  </section>
</template>

<script>

import Preview from '../../components/Preview.vue';
import Slider from '../../components/Slider.vue';

export default {
  name: 'Kentatsu-Template',
  components: {
    Preview,
    Slider,
  },

  props: {
    'Line': {
      type: Object,
      required: true
    }
  }
};

</script>
