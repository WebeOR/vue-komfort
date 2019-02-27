<template>
  <md-card class="chimney-card">
    <md-card-media-cover md-text-scrim>
      <md-card-media md-ratio="1:1">
        <img :src="item.src" :alt="item.title">
      </md-card-media>
      <md-card-area>
        <md-card-header>
          <span class="md-title">{{ item.title }}</span>
        </md-card-header>
      </md-card-area>
    </md-card-media-cover>
  </md-card>
</template>

<script>

  export default {
    name: 'Chimney-Card',
    props: {
      'item': {
        type: Object,
        required: true,
      }
    }
  };

</script>

<style lang="scss">

  @import '../../stylesheets/partials/_mixins.scss';

  .chimney-card {
    flex: 1 1 24%;
    margin: 8px;
    border-radius: 2px;
    transition: box-shadow .2s ease-in;

    &:hover {
      @include MDShadow-2;
    }
  }

</style>
