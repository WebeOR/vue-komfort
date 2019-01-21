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

          <Slider
            v-if="Line.images.length"
            :slides="Line.images"
            />

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
          :key="index">
          {{ cell }}
        </md-table-cell>
      </md-table-row>
    </md-table>

    <md-divider />

  </section>
</template>

<script>

  import Slider from '../../components/Slider.vue';

  export default {
    name: 'Termokraft-Template',
    components: {
      Slider
    },

    props: {
      'Line': {
        type: Object,
        required: true
      }
    },

    data: () => ({
    }),

    mounted () {
      this.$nextTick( () => {

      });
    },

  };

</script>
