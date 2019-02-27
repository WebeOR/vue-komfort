<template>
  <md-card
    :id="Line.id"
    md-with-hover
    class="md-layout-item md-small-size-100">
    <md-card-header>
      <h3 class="md-title">{{ Line.title }}</h3>
    </md-card-header>
    <md-card-content>
      <div class="md-layout md-alignment-top-space-between">
        <Preview
          :src="Line.image"
          :alt="Line.title"
          />
        <Slider
          v-if="Line.images && Line.images.length"
          :slides="Line.images"
          />
        <div
          v-if="Line.characteristics && Line.characteristics.length"
          class="md-layout-item md-size-50 md-small-size-100">
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
          :key="key">
          {{ description }}
        </md-card-content>
      </div>

      <p class="md-body-2">{{ Line.description }}</p>
    </md-card-content>
    <md-card-actions>
      <md-button
        v-for="({ title , link } , index ) in Line.docs"
        :key="index"
        :href="link"
        target="_blank"
        rel="nofollow"
        class="md-raised md-accent">
        {{ title }}
      </md-button>
    </md-card-actions>
  </md-card>
</template>

<script>

  import Preview from '../../components/Preview.vue';
  import Slider from '../../components/Slider.vue';

  export default {
    name: 'Gikamini-Template',
    components: {
      Preview,
      Slider,
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
    }
  };

</script>

<style lang="scss" scoped>

.md-card {
  margin: 0 0 16px 0;
  max-width: 31%;
  flex: 0 1 31%;
  .md-title {
    font-size: 18px;
  }
}

</style>

